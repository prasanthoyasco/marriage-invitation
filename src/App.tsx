import { useState } from 'react';
import { OpeningCover } from './components/OpeningCover';
import { AudioController } from './components/AudioController';
import { HeroSection } from './components/HeroSection';
import { TamilSloganSection } from './components/TamilSloganSection';
import { CoupleSection } from './components/CoupleSection';
import { CountdownSection } from './components/CountdownSection';
import { TimelineSection } from './components/TimelineSection';
import { AjayHanumanSection } from './components/AjayHanumanSection';
import { RSVPSection } from './components/RSVPSection';
import { ContactAjaySection } from './components/ContactAjaySection';
import { FamilySection } from './components/FamilySection';
import { VenueSection } from './components/VenueSection';
import { ReminderSection } from './components/ReminderSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { FloatingPetals } from './components/ui/FloatingPetals';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenInvitation = () => {
    setHasOpened(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF4E6] text-[#381F0D] selection:bg-[#B8860B]/35 selection:text-[#381F0D] relative overflow-x-hidden">
      {/* Fixed Full-Site Warm Sandalwood / Antique Parchment Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at center, #FDF9EE 0%, #F6ECDB 65%, #EAD6B4 100%)`,
        }}
      />
      {/* Subtle Warm Amber Vignette & Atmospheric Depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-radial-gradient from-transparent via-[#8C4A15]/5 to-[#5C2D0C]/15" />

      {/* Desktop Luxury Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Persistent Floating Floral Petals throughout entire website until footer */}
      <FloatingPetals count={26} className="fixed inset-0 pointer-events-none z-20 opacity-70" />

      {/* 1. Opening Cover Experience (3-5s Anime Video / Envelope Opening) */}
      <OpeningCover isOpen={hasOpened} onOpen={handleOpenInvitation} />

      {/* 2. Floating Background Audio Controller (Malargal Keten Song) */}
      <AudioController autoPlayTrigger={hasOpened} />

      {/* 3. Main Wedding Invitation Content */}
      <main className="relative z-10">
        {/* Hero Section with Lord Ganesha, Sanskrit Mantra, Couple Names & 1st Invitation Card */}
        <HeroSection />

        {/* Tamil Sangam Love Slogan (Kurunthokai 40) */}
        <TamilSloganSection />

        {/* Couple Profiles & Ancestral Blessings */}
        <CoupleSection />

        {/* Real-time Live Auspicious Countdown in Tamil */}
        <CountdownSection />

        {/* Auspicious Ceremony Events: Reception & DJ Night with Dance Video + Muhurtham 10s Thaali Kattu Video */}
        <TimelineSection />

        {/* Devotional Section: Ajay as Lord Hanuman having the couple in the heart */}
        <AjayHanumanSection />

        {/* Interactive RSVP Section (Family Name, WhatsApp, Attendance, Guest Count) */}
        <RSVPSection />

        {/* Direct Contact Ajay (Call & WhatsApp) */}
        <ContactAjaySection />

        {/* Family, Best Compliments & Little Flowers */}
        {/* <FamilySection /> */}

        {/* Wedding Venues & Google Maps */}
        <VenueSection />

        {/* Save The Date / Calendar Reminder (Dual Alarms: 1 Week & 1 Hour Before) */}
        <ReminderSection />
      </main>

      {/* 4. Closing Footer */}
      <Footer />
    </div>
  );
}

export default App;
