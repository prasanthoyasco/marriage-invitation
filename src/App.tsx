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

export function App() {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenInvitation = () => {
    setHasOpened(true);
  };

  return (
    <div className="min-h-screen bg-[#24040B] text-[#FFFDF9] selection:bg-[#D4AF37]/35 selection:text-[#FFF8E7] relative overflow-x-hidden">
      {/* Fixed Full-Site Crimson Royal Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat opacity-95"
        style={{ backgroundImage: `url('/assets/images/backgroundimage.png')` }}
      />
      {/* Subtle Cinematic Vignette & Atmospheric Depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-radial-gradient from-transparent via-[#2D060F]/35 to-[#160207]/80" />

      {/* Desktop Luxury Magnetic Custom Cursor */}
      <CustomCursor />

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
        <FamilySection />

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
