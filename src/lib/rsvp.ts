export type AttendanceStatus = 'Joyfully Attending' | 'Regretfully Declining';

export interface RSVPFormData {
  familyName: string; // Eg. Ramu and Family
  whatsapp: string;
  attendance: AttendanceStatus;
  guestCount: string; // Eg. "3 நபர்கள் (3 People)"
  notes?: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  whatsappDirectUrl?: string;
}

/**
 * Creates a pre-filled WhatsApp message URL to send RSVP directly to Ajay
 */
export function createWhatsAppRsvpUrl(targetPhone: string, data: RSVPFormData): string {
  const cleanTarget = targetPhone.replace(/[^0-9]/g, '');
  const attendanceTamil = data.attendance === 'Joyfully Attending'
    ? 'மகிழ்ச்சியுடன் கலந்து கொள்கிறோம் (Joyfully Attending) ✅'
    : 'வாழ்த்துகளுடன் கலந்து கொள்ள இயலாமைக்கு வருந்துகிறோம் (Regretfully Declining) 💐';

  const message = [
    `*🙏 திருமண வருகை உறுதி (Wedding RSVP)*`,
    ``,
    `*குடும்பப் பெயர்:* ${data.familyName}`,
    `*வாட்ஸ்அப் எண்:* ${data.whatsapp}`,
    `*வருகை:* ${attendanceTamil}`,
    `*எதிர்பார்க்கப்படும் உறுப்பினர்கள்:* ${data.guestCount || '1'} நபர்கள்`,
    data.notes ? `*குறிப்பு:* ${data.notes}` : '',
    ``,
    `அர்ஜுன் & மீனாட்சி திருமண விழாவிற்கு எங்கள் நல்வாழ்த்துகள்! 🌸✨`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${cleanTarget}?text=${encodeURIComponent(message)}`;
}

export async function submitRSVP(data: RSVPFormData, targetWhatsApp?: string): Promise<RSVPResponse> {
  // 1. Validation in Tamil/English
  if (!data.familyName || data.familyName.trim().length < 2) {
    throw new Error("தயவுசெய்து உங்கள் குடும்பப் பெயரை உள்ளிடவும் (Please enter family name).");
  }

  const cleanPhone = data.whatsapp.replace(/[^0-9+]/g, '');
  if (cleanPhone.length < 8) {
    throw new Error("தயவுசெய்து சரியான வாட்ஸ்அப் எண்ணை உள்ளிடவும் (Please enter valid WhatsApp number).");
  }

  // 2. Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 3. Store locally in browser storage
  try {
    const existingRaw = localStorage.getItem('wedding_rsvps');
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.push({
      ...data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
  } catch (e) {
    console.warn("Could not save RSVP to localStorage:", e);
  }

  const whatsappDirectUrl = targetWhatsApp ? createWhatsAppRsvpUrl(targetWhatsApp, data) : undefined;

  return {
    success: true,
    whatsappDirectUrl,
    message: data.attendance === 'Joyfully Attending'
      ? `மிக்க நன்றி, ${data.familyName.trim()}! உங்கள் வருகையை ஆவலுடன் எதிர்நோக்குகிறோம்! (Thank you, we eagerly await your joyful presence!)`
      : `தங்கள் நல்வாழ்த்துகளுக்கு மனமார்ந்த நன்றி, ${data.familyName.trim()}! (Thank you for your warm wishes and blessings!)`
  };
}
