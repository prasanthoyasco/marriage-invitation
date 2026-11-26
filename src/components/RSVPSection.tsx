import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Send, MessageSquareShare, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitRSVP, createWhatsAppRsvpUrl, AttendanceStatus } from '../lib/rsvp';
import { weddingConfig } from '../config/wedding';

export const RSVPSection: React.FC = () => {
  const [familyName, setFamilyName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [attendance, setAttendance] = useState<AttendanceStatus>('Joyfully Attending');
  const [guestCount, setGuestCount] = useState('3');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [directWhatsAppUrl, setDirectWhatsAppUrl] = useState<string | null>(null);

  const targetPhone = weddingConfig.rsvp.targetWhatsApp || weddingConfig.contactAjay.whatsappNumber;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await submitRSVP(
        {
          familyName,
          whatsapp,
          attendance,
          guestCount,
          notes
        },
        targetPhone
      );

      setSuccessMessage(res.message);
      if (res.whatsappDirectUrl) {
        setDirectWhatsAppUrl(res.whatsappDirectUrl);
      }

      if (attendance === 'Joyfully Attending') {
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#D4AF37', '#F7E2B5', '#FAF9F7', '#E5C583']
          });
        } catch {
          // ignore canvas-confetti issues
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFamilyName('');
    setWhatsapp('');
    setAttendance('Joyfully Attending');
    setGuestCount('3');
    setNotes('');
    setSuccessMessage(null);
    setDirectWhatsAppUrl(null);
    setError(null);
  };

  return (
    <section id="rsvp" className="py-20 md:py-28 px-4 bg-transparent relative">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] block mb-1 font-bold uppercase tracking-widest">
            Your Presence is Our Greatest Joy
          </span>
          <div className="flex flex-col items-center">
            <h2 className="font-cinzel text-3xl sm:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
              RSVP
            </h2>
            <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-semibold mt-1">
              வருகை உறுதி
            </span>
          </div>
          <p className="font-cormorant text-base sm:text-lg text-[#5C3B24] mt-2 font-medium">
            Please confirm the attendance of your family to celebrate with us.
          </p>
          <div className="flex items-center justify-center gap-3 w-28 mx-auto mt-3 opacity-60">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-[#FFFDF8]/95 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-[0_15px_45px_rgba(74,36,10,0.12)] border-2 border-[#C68A4C]/60 relative overflow-hidden"
        >
          {/* Filigree */}
          <div className="absolute top-2 left-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
          <div className="absolute top-2 right-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
          <div className="absolute bottom-2 left-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
          <div className="absolute bottom-2 right-2 text-[#C68A4C]/40 text-xs select-none">✦</div>

          {successMessage ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#FAF0DC] border border-[#C68A4C] text-[#8C4A15] flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="w-8 h-8 text-[#8C4A15]" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#381F0D] font-bold mb-1">
                RSVP Received!
              </h3>
              <span className="font-tamil text-xs text-[#7A3E10] block mb-2 font-semibold">
                (பதிவு செய்யப்பட்டது!)
              </span>
              <p className="font-cormorant text-base sm:text-lg text-[#5C3B24] mb-6 leading-relaxed font-medium">
                {successMessage}
              </p>

              {/* Direct WhatsApp Share to Ajay */}
              {directWhatsAppUrl && (
                <div className="mb-6">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#ffffff] font-bold text-sm uppercase tracking-wide transition-all shadow-lg"
                  >
                    <MessageSquareShare className="w-4 h-4" />
                    <span>Send RSVP to Ajay on WhatsApp</span>
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl border-2 border-[#C68A4C] text-[#381F0D] hover:bg-[#FAF0DC] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm font-sans"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Family Name */}
              <div>
                <label htmlFor="rsvp-family" className="block text-xs uppercase tracking-wider text-[#381F0D] font-bold mb-1.5 font-sans">
                  <span>Family / Guest Name *</span>
                  <span className="font-tamil text-[11px] text-[#7A3E10] font-normal lowercase tracking-normal block mt-0.5">
                    (குடும்பத்தின் பெயர்)
                  </span>
                </label>
                <input
                  id="rsvp-family"
                  type="text"
                  required
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  placeholder="e.g. Ramu and Family"
                  className="w-full px-4 py-3 rounded-xl border border-[#C68A4C]/50 focus:border-[#8C4A15] focus:ring-1 focus:ring-[#8C4A15] outline-none text-[#381F0D] placeholder-[#8C6B52]/50 text-sm sm:text-base transition-colors bg-[#FFFDF9] font-medium shadow-2xs"
                />
              </div>

              {/* 2. WhatsApp Number */}
              <div>
                <label htmlFor="rsvp-whatsapp" className="block text-xs uppercase tracking-wider text-[#381F0D] font-bold mb-1.5 font-sans">
                  <span>WhatsApp Number *</span>
                  <span className="font-tamil text-[11px] text-[#7A3E10] font-normal lowercase tracking-normal block mt-0.5">
                    (வாட்ஸ்அப் எண்)
                  </span>
                </label>
                <input
                  id="rsvp-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#C68A4C]/50 focus:border-[#8C4A15] focus:ring-1 focus:ring-[#8C4A15] outline-none text-[#381F0D] placeholder-[#8C6B52]/50 text-sm sm:text-base transition-colors bg-[#FFFDF9] font-medium shadow-2xs"
                />
              </div>

              {/* 3. Expected Family Members / Guest Count */}
              <div>
                <label htmlFor="rsvp-count" className="block text-xs uppercase tracking-wider text-[#381F0D] font-bold mb-1.5 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#8C4A15]" />
                    <span>Number of Guests Attending *</span>
                  </div>
                  <span className="font-cormorant text-[12px] text-[#8C4A15] font-semibold tracking-wide block mt-0.5 pl-5">
                    You can expect our family by:
                  </span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {['1', '2', '3', '4', '5+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`py-2.5 rounded-xl border text-sm font-bold transition-all ${guestCount === num
                          ? 'bg-gradient-to-r from-[#8C4A15] to-[#7A3E10] text-[#FFFDF8] border-[#8C4A15] shadow-md scale-105'
                          : 'bg-[#FAF0DC] text-[#5C2D0C] border-[#C68A4C]/40 hover:border-[#8C4A15]'
                        }`}
                    >
                      {num} {num === '1' ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Attendance Options */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#381F0D] font-bold mb-2 font-sans">
                  <span>Attendance Confirmation *</span>
                  <span className="font-tamil text-[11px] text-[#7A3E10] font-normal lowercase tracking-normal block mt-0.5">
                    (வருகை விருப்பம்)
                  </span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${attendance === 'Joyfully Attending'
                        ? 'border-[#8C4A15] bg-[#FAF0DC] text-[#381F0D] font-bold shadow-xs'
                        : 'border-[#C68A4C]/35 bg-[#FFFDF8] text-[#5C3B24] hover:border-[#8C4A15]/60'
                      }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="Joyfully Attending"
                      checked={attendance === 'Joyfully Attending'}
                      onChange={() => setAttendance('Joyfully Attending')}
                      className="accent-[#8C4A15] w-4 h-4"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs sm:text-sm font-semibold">Joyfully Attending</span>
                      <span className="text-[11px] font-tamil text-[#7A3E10]">மகிழ்ச்சியுடன் கலந்து கொள்கிறோம்</span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${attendance === 'Regretfully Declining'
                        ? 'border-[#8C4A15] bg-[#FAF0DC] text-[#381F0D] font-bold shadow-xs'
                        : 'border-[#C68A4C]/35 bg-[#FFFDF8] text-[#5C3B24] hover:border-[#8C4A15]/60'
                      }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="Regretfully Declining"
                      checked={attendance === 'Regretfully Declining'}
                      onChange={() => setAttendance('Regretfully Declining')}
                      className="accent-[#8C4A15] w-4 h-4"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs sm:text-sm font-semibold">Regretfully Declining</span>
                      <span className="text-[11px] font-tamil text-[#7A3E10]">வாழ்த்துகளுடன் கலந்து கொள்ள இயலாமைக்கு வருந்துகிறோம்</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Optional Note */}
              <div>
                <label htmlFor="rsvp-notes" className="block text-xs uppercase tracking-wider text-[#381F0D] font-bold mb-1.5 font-sans">
                  Warm Wishes / Notes for the Couple (Optional)
                </label>
                <textarea
                  id="rsvp-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Leave your heartfelt wishes..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C68A4C]/50 focus:border-[#8C4A15] outline-none text-[#381F0D] placeholder-[#8C6B52]/50 text-sm transition-colors bg-[#FFFDF9] font-medium shadow-2xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl group disabled:opacity-70 disabled:cursor-not-allowed font-sans"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#FFFDF8]" />
                      <span>Submitting RSVP...</span>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center leading-tight">
                        <span className="font-bold">Confirm RSVP</span>
                        <span className="font-tamil text-[10px] text-[#FAF0DC] font-normal">
                          (வருகையை உறுதி செய்க)
                        </span>
                      </div>
                      <Send className="w-4 h-4 text-[#FFFDF8] group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Quick-Send Button */}
                {targetPhone && (
                  <a
                    href={createWhatsAppRsvpUrl(targetPhone, {
                      familyName: familyName || 'Family',
                      whatsapp: whatsapp || '-',
                      attendance,
                      guestCount,
                      notes
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-[#25D366]/60 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1b6b33] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs"
                  >
                    <MessageSquareShare className="w-4 h-4 text-[#25D366]" />
                    <span>Send RSVP Directly via WhatsApp</span>
                  </a>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
