import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, Download, Clock } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { generateGoogleCalendarUrl, downloadIcsWithReminders } from '../lib/calendar';

export const ReminderSection: React.FC = () => {
  const { reminder } = weddingConfig;
  const calendarUrl = generateGoogleCalendarUrl(reminder.calendarEvent);

  const handleDownloadIcs = () => {
    downloadIcsWithReminders(reminder.calendarEvent);
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-transparent relative border-t border-[#D4AF37]/25">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFDF8]/95 backdrop-blur-md p-8 sm:p-14 rounded-3xl shadow-[0_15px_45px_rgba(74,36,10,0.12)] border-2 border-[#C68A4C]/60 relative overflow-hidden"
        >
          {/* Top Golden Bell Icon */}
          <div className="w-16 h-16 rounded-full bg-[#FAF0DC] border border-[#C68A4C] text-[#8C4A15] flex items-center justify-center mx-auto mb-6 shadow-md">
            <Bell className="w-8 h-8 text-[#8C4A15] animate-pulse" />
          </div>

          <div className="mb-3 flex flex-col items-center">
            <span className="font-tamil text-sm sm:text-base text-[#7A3E10] font-semibold block">
              நாட்காட்டியில் நினைவூட்டல் சேர்க்க
            </span>
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest mt-0.5 block">
              Save The Date
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl text-[#381F0D] font-bold tracking-wide uppercase mb-4">
            {reminder.tamilTitle || reminder.title}
          </h2>

          <p className="font-tamil text-sm sm:text-lg text-[#5C3B24] mb-6 max-w-lg mx-auto leading-relaxed font-medium">
            {reminder.subtitle}
          </p>

          {/* Dual Notification Reminder Highlights */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3 rounded-2xl bg-[#FAF0DC] border border-[#C68A4C]/50 mb-8 text-xs sm:text-sm font-tamil text-[#5C2D0C]">
            <div className="flex items-center gap-1.5 font-bold">
              <Clock className="w-4 h-4 text-[#8C4A15]" />
              <span>தானியங்கி நினைவூட்டல்:</span>
            </div>
            <span className="px-3 py-1 rounded-xl bg-[#FFFDF8] border border-[#C68A4C]/60 font-bold flex flex-col items-center leading-tight shadow-xs">
              <span className="text-[#381F0D]">1 வாரத்திற்கு முன்</span>
              <span className="text-[10px] text-[#7A3E10] font-bold uppercase tracking-wider">1 Week Before</span>
            </span>
            <span className="text-[#8C4A15] font-bold">&</span>
            <span className="px-3 py-1 rounded-xl bg-[#FFFDF8] border border-[#C68A4C]/60 font-bold flex flex-col items-center leading-tight shadow-xs">
              <span className="text-[#381F0D]">1 மணி நேரத்திற்கு முன்</span>
              <span className="text-[10px] text-[#7A3E10] font-bold uppercase tracking-wider">1 Hour Before</span>
            </span>
          </div>

          {/* Calendar Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Google Calendar Link */}
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl border border-[#C68A4C] bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] font-bold uppercase transition-all duration-300 shadow-lg group font-tamil"
            >
              <Calendar className="w-4 h-4 text-[#FFFDF8] group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs sm:text-sm">நாட்காட்டியில் சேர்க்க</span>
                <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#FAF0DC] font-bold">
                  Add to Google Calendar
                </span>
              </div>
            </a>

            {/* Apple / Phone .ics Download with dual alarm triggers */}
            <button
              type="button"
              onClick={handleDownloadIcs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl border-2 border-[#C68A4C] bg-[#FAF0DC] hover:bg-[#F5E6CC] text-[#381F0D] font-bold uppercase transition-all duration-300 shadow-md font-tamil"
            >
              <Download className="w-4 h-4 text-[#8C4A15]" />
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs sm:text-sm">நாட்காட்டி கோப்பு (.ics)</span>
                <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#8C4A15] font-bold">
                  Apple / Phone Calendar
                </span>
              </div>
            </button>
          </div>

          <p className="font-tamil text-xs sm:text-sm text-[#5C3B24] max-w-md mx-auto leading-relaxed font-medium">
            {reminder.instruction}
          </p>

          {/* Decorative Corner Filigree */}
          <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#D4AF37]/10 pointer-events-none" />
          <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-[#D4AF37]/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
