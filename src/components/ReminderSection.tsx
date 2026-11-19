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
          className="bg-[#25040B]/85 backdrop-blur-md p-8 sm:p-14 rounded-3xl shadow-2xl border border-[#D4AF37]/50 relative overflow-hidden"
        >
          {/* Top Golden Bell Icon */}
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F7E2B5] flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Bell className="w-8 h-8 text-[#D4AF37] animate-pulse" />
          </div>

          <span className="font-tamil text-sm sm:text-base text-[#F7E2B5] font-semibold block mb-2">
            நாட்காட்டியில் நினைவூட்டல் சேர்க்க • Save The Date
          </span>

          <h2 className="font-cinzel text-2xl sm:text-4xl text-[#FFFDF9] font-semibold tracking-wide uppercase mb-4">
            {reminder.tamilTitle || reminder.title}
          </h2>

          <p className="font-tamil text-sm sm:text-lg text-[#F5E6CC] mb-6 max-w-lg mx-auto leading-relaxed">
            {reminder.subtitle}
          </p>

          {/* Dual Notification Reminder Highlights */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3 rounded-2xl bg-[#180206]/85 border border-[#D4AF37]/40 mb-8 text-xs sm:text-sm font-tamil text-[#F7E2B5]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>தானியங்கி நினைவூட்டல்:</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 font-bold">
              1 வாரத்திற்கு முன் (1 Week Before)
            </span>
            <span>&</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 font-bold">
              1 மணி நேரத்திற்கு முன் (1 Hour Before)
            </span>
          </div>

          {/* Calendar Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Google Calendar Link */}
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B38D28] hover:from-[#E5C365] hover:to-[#D4AF37] text-[#1E0308] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group font-tamil"
            >
              <Calendar className="w-4 h-4 text-[#1E0308] group-hover:scale-110 transition-transform" />
              <span>Google Calendar-ல் சேர்க்க</span>
            </a>

            {/* Apple / Phone .ics Download with dual alarm triggers */}
            <button
              type="button"
              onClick={handleDownloadIcs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#D4AF37] bg-[#180206]/80 hover:bg-[#D4AF37]/20 text-[#F7E2B5] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl font-tamil"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Apple / Phone Calendar (.ics)</span>
            </button>
          </div>

          <p className="font-tamil text-xs sm:text-sm text-[#E8D1A7]/80 max-w-md mx-auto leading-relaxed">
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
