#!/usr/bin/env node

/**
 * Clean Unused Media Script
 * -------------------------------------------------------------
 * Analyzes all project components, templates, configs, and styles
 * for references to images, videos, audio, and SVGs in `public/`.
 *
 * Usage:
 *   node scripts/clean-unused-media.js            # Dry-run analysis and report
 *   node scripts/clean-unused-media.js --remove   # Permanently delete unused media
 *   node scripts/clean-unused-media.js --backup   # Move unused media to .media-backup/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Media file extensions to detect
const MEDIA_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.svg',
  '.webp', '.mp4', '.mp3', '.wav', '.webm',
  '.ogg', '.m4a', '.avif', '.ico'
]);

// Code files to scan for media references
const CODE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json'];

// Directories to search code in
const CODE_DIRS = ['src', 'index.html', 'tailwind.config.js', 'vite.config.ts'];

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

// Recursively find files
function getFilesRecursively(dir, filterFn) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const stat = fs.statSync(dir);
  if (stat.isFile()) {
    if (!filterFn || filterFn(dir)) results.push(dir);
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (['node_modules', 'dist', '.git', '.media-backup'].includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, filterFn));
    } else if (!filterFn || filterFn(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

// 1. Collect all codebase source files
const codeFiles = [];
for (const target of CODE_DIRS) {
  const fullTarget = path.join(projectRoot, target);
  codeFiles.push(...getFilesRecursively(fullTarget, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    return CODE_EXTENSIONS.includes(ext) || path.basename(filePath) === 'index.html';
  }));
}

console.log(`\n🔍 Scanning ${codeFiles.length} source code files for media references...`);
const codeContents = codeFiles.map((file) => ({
  file: path.relative(projectRoot, file).replace(/\\/g, '/'),
  content: fs.readFileSync(file, 'utf8')
}));

// 2. Collect all media files in public/
const publicDir = path.join(projectRoot, 'public');
const mediaFiles = getFilesRecursively(publicDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return MEDIA_EXTENSIONS.has(ext);
});

console.log(`📦 Found ${mediaFiles.length} media files in public/\n`);

// 3. Match media files against codebase references
const usedFiles = [];
const unusedFiles = [];

for (const mPath of mediaFiles) {
  const relToPublic = path.relative(publicDir, mPath).replace(/\\/g, '/');
  const baseName = path.basename(mPath);
  const size = fs.statSync(mPath).size;

  // Potential reference patterns in code
  const searchVariants = [
    relToPublic,
    `/${relToPublic}`,
    baseName,
    encodeURI(baseName),
    encodeURI(relToPublic),
    `assets/${relToPublic}`
  ];

  let isUsed = false;
  let matchedIn = null;

  for (const item of codeContents) {
    for (const variant of searchVariants) {
      if (item.content.includes(variant)) {
        isUsed = true;
        matchedIn = item.file;
        break;
      }
    }
    if (isUsed) break;
  }

  if (isUsed) {
    usedFiles.push({ path: relToPublic, fullPath: mPath, size, matchedIn });
  } else {
    unusedFiles.push({ path: relToPublic, fullPath: mPath, size });
  }
}

// Summary Report
console.log('='.repeat(70));
console.log(`✅ ACTIVE MEDIA FILES IN USE (${usedFiles.length})`);
console.log('='.repeat(70));
usedFiles.forEach((u) => {
  console.log(`  ✓ ${u.path.padEnd(45)} [${formatBytes(u.size).padStart(9)}] -> ${u.matchedIn}`);
});

console.log('\n' + '='.repeat(70));
console.log(`⚠️  UNUSED MEDIA FILES DETECTED (${unusedFiles.length})`);
console.log('='.repeat(70));
let totalUnusedSize = 0;
unusedFiles.forEach((u) => {
  totalUnusedSize += u.size;
  console.log(`  ✗ ${u.path.padEnd(45)} [${formatBytes(u.size).padStart(9)}]`);
});

console.log('='.repeat(70));
console.log(`📊 Total reclaimable disk space: ${formatBytes(totalUnusedSize)}`);
console.log('='.repeat(70) + '\n');

// 4. Handle Execution Flags (--remove / --delete / --backup)
const args = process.argv.slice(2);
const shouldRemove = args.includes('--remove') || args.includes('--delete');
const shouldBackup = args.includes('--backup');

if (unusedFiles.length === 0) {
  console.log('🎉 No unused media files found! Project is 100% clean.\n');
  process.exit(0);
}

if (shouldBackup) {
  const backupDir = path.join(projectRoot, '.media-backup');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  console.log(`📦 Moving ${unusedFiles.length} unused files to backup: .media-backup/ ...`);
  for (const item of unusedFiles) {
    const dest = path.join(backupDir, item.path);
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.renameSync(item.fullPath, dest);
  }
  console.log(`✅ Successfully backed up and moved ${unusedFiles.length} files (${formatBytes(totalUnusedSize)} reclaimed)!\n`);
} else if (shouldRemove) {
  console.log(`🗑️  Removing ${unusedFiles.length} unused files...`);
  for (const item of unusedFiles) {
    fs.unlinkSync(item.fullPath);
  }
  console.log(`✅ Successfully deleted ${unusedFiles.length} unused files (${formatBytes(totalUnusedSize)} reclaimed)!\n`);
} else {
  console.log('ℹ️  This was a DRY RUN (no files were modified or deleted).');
  console.log('👉 To permanently delete these unused files, run:');
  console.log('     node scripts/clean-unused-media.js --remove\n');
  console.log('👉 To safely move them to a ".media-backup" folder instead, run:');
  console.log('     node scripts/clean-unused-media.js --backup\n');
}
