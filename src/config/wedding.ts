import type { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "Madhuprasath & Priyadharshini - Wedding Invitation",
    description:
      "Together with our families, we cordially invite you to celebrate the auspicious wedding of Madhuprasath and Priyadharshini.",
    siteUrl: "https://madhuprasathwedspriyadharshini.com",
    ogImage: "/assets/images/couple-portrait.jpg"
  },

  openingCover: {
    video: "/assets/images/couple-namaste.gif",
    animeVideo: "/assets/images/couple-namaste.gif",
    animeGif: "/Animated Indian Wedding Namaste Couple.gif",
    poster: "/Animated Indian Wedding Namaste Couple.gif",
    firstInvitationCard: "/assets/images/invitation-card.jpg",
    tapHint: "Tap to Open Invitation"
  },

  audio: {
    src: "/assets/audio/malargal-keten.mp3",
    fallbackSrc: "/assets/audio/mangalam-shlok.mp3",
    title: "🎶",
    loop: true
  },

  slogan: {
    poemLines: [
      "யாயும் ஞாயும்",
      "யா... ராகியரோ",
      "எந்தையும் நுந்தையும்",
      "எம்முறைக் கேளிர்",
      "செம்புல",
      "பெயல் நீர் போல்",
      "அன்புடை..",
      "நெஞ்சம்தாம்",
      "கலந்தனவே...",
      "கலந்தனவே..."
    ],
    source: "சங்க இலக்கியம் • குறுந்தொகை 40 (செம்புலப்பெயனீரார்)",
    meaning:
      "என் தாயும் உன் தாயும் எவ்வகையில் உறவினர்கள்? என் தந்தையும் உன் தந்தையும் எங்ஙனம் உறவானவர்கள்? ஆயினும், செம்மண் நிலத்தில் பெய்த மழைநீர் போல, அன்புள்ள நம் நெஞ்சங்கள் தாமாகவே ஒன்றாய் கலந்தனவே!"
  },

  couple: {
    title: "Madhuprasath Weds Priyadharshini",
    tamilTitle: "மதுபிரசாத் & பிரியதர்ஷினி திருமண விழா",
    monogram: "M & P",
    subtitle: "A Beautiful Beginning of Two Hearts Becoming One",

    heroImage: "/assets/images/invitation-card.jpg",
    portraitImage: "/assets/images/invitation-card-back.jpg",
    firstInvitationCard: "/assets/images/invitation-card.jpg",
    animeVideo: "/assets/images/couple-namaste.gif",
    animeGif: "/Animated Indian Wedding Namaste Couple.gif",

    groom: {
      title: "Mr.",
      name: "Madhuprasath R",
      fullName: "Madhuprasath R",
      tamilName: "Madhuprasath R",
      labelTamil: "",
      nameTransliteration: "மதுபிரசாத் R",
      role: "Groom",

      parents: {
        father: "LATE Ramu NS",
        mother: "Punitha C"
      }
    },

    bride: {
      title: "Ms.",
      name: "Priyadharshini J",
      fullName: "Priyadharshini J",
      tamilName: "Priyadharshini J",
      labelTamil: "",
      nameTransliteration: "பிரியதர்ஷினி J",
      role: "Bride",

      parents: {
        father: "LATE Jeyaram",
        mother: "Punithavathi S"
      }
    }
  },

  dates: {
    wedding: "2027-02-08T06:00:00+05:30",
    engagement: "2027-02-07T18:00:00+05:30",
    reception: "2027-02-07T18:00:00+05:30",

    timezone: "Asia/Kolkata",

    displayWeddingDate: "Monday, 8th February 2027",
    displayShortDate: "08-02-2027",
    displayTamilDate: "Monday, 8th February 2027"
  },

  invocation: {
    ganeshaMantra: {
      sanskrit: "Om Sri Ganeshayanamaha • Shubhamasthu",
      englishTransliteration: "Om Gam Ganapataye Namaha",
      meaning:
        "With the divine grace and blessings of Lord Ganesha, the remover of all obstacles, we joyfully embark on our sacred journey of married life."
    },

    blessings: {
      intro: "With the Divine Blessings of Our Ancestors & Elders",

      elders: [
        "Late Mr. Ramu NS & Mrs.  Punitha C",
        "Late Mr. LATE Jeyaram & Mrs.Punithavathi S"
      ],

      invitationNote:
        "We cordially invite you and your family to grace this auspicious occasion and shower your heartfelt blessings on the newlyweds."
    }
  },

  events: [
    {
      id: "reception",
      title: "Wedding Reception & Musical Evening",
      tamilTitle: "Reception",
      subtitle: "Reception • 6:00 PM - 10:00 PM",
      date: "Sunday, 7th February 2027",
      tamilDate: "Sunday, 07-02-2027",
      time: "6:00 PM - 10:00 PM",
      description:
        "An enchanting evening of joyful music, celebration, dance, and a lavish dinner to welcome and celebrate the newlyweds.",
      tamilDescription:
        "Join us for an evening of celebration starting with a couple's dance and dinner from 6:00 PM to 10:00 PM.",
      venueName: "Sri Ranganayaki Kalyana Mandapam",
      address: "Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai",
      image: "/assets/images/event-wedding.png",
      video: "",
      videoPoster: "/assets/images/event-wedding.png",
      videoDurationText: "Couple Dance"
    },

    {
      id: "muhurtham",
      title: "Sacred Muhurtham & Mangalyadharanam",
      tamilTitle: "Muhurtham",
      subtitle: "Muhurtham • 6:00 AM - 7:00 AM",
      date: "Monday, 8th February 2027",
      tamilDate: "Monday, 08-02-2027",
      time: "6:00 AM - 7:00 AM",
      secondaryTime: "Mangalya Dharanam: In the auspicious Brahma Muhurtham between 6:00 AM and 7:00 AM",
      description:
        "The sacred wedding rituals accompanied by traditional nadaswaram music and auspicious Vedic mantras as the sacred knot is tied amidst blessings.",
      tamilDescription:
        "The sacred and emotional 10-second moment of Thaali tying ceremony with resounding kettimelam and floral blessings.",
      venueName: "Sri Ranganayaki Kalyana Mandapam",
      address: "Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai",
      image: "Thaali-Kattudhal Wedding Ceremony Sequence.gif",
      video: "/assets/video/muhurtham-thaali.mp4",
      videoPoster: "/assets/images/Muhurtham.jpg",
      videoDurationText: "10 Sec Sacred Moment"
    }
  ],

  devotionalBlessing: {
    enabled: true,
    title: "Divine Couple in the Heart of Lord Hanuman",
    tamilTitle: "Blessings of Devotee Lord Hanuman",
    subtitle: "Ajay as Lord Hanuman Revealing the Couple in His Heart",
    video: "/assets/images/ajay-hanuman.mp4",
    image: "/assets/images/ajay-hanuman.gif",
    gif: "/assets/images/ajay-hanuman.gif",
    caption:
      "Just as Bhakta Hanuman revealed Sita Rama in his sacred heart, may divine grace, eternal protection, and abundant love bless the couple forever.",
    tamilVerse:
      "Manojavam Maruta Tulya Vegam — Blessed with eternal bond through ancestral virtues, wishing the couple a joyful and prosperous life together under the sacred feet of Lord Anjaneya!"
  },

  contactAjay: {
    name: "Ajay",
    tamilName: "Ajay",
    role: "Wedding Coordinator",
    phone: "+918778614319",
    displayPhone: "+91 87786 14319",
    whatsappNumber: "918778614319",
    note: "Feel free to reach out to Ajay anytime for directions, event details, accommodation, or any assistance."
  },

  venues: [
    {
      id: "venue-wedding",
      type: "Wedding Venue",
      name: "Sri Ranganayaki Kalyana Mandapam",
      address: "Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai"
    }
  ],

  wishes: [
    {
      id: "w1",
      name: "Karthik & Family",
      message: "Warmest congratulations and best wishes to Madhuprasath and Priyadharshini on your wedding! May your life together be filled with boundless joy and prosperity! 🌸💛"
    },
    {
      id: "w2",
      name: "Priya",
      message: "Wishing you both a lifetime of love, laughter, happiness, and abundant togetherness! 💐❤️"
    },
    {
      id: "w3",
      name: "Vignesh & Divya",
      message: "May the love you share today grow stronger as you grow old together! Happy wedding celebrations! 💍✨"
    }
  ],

  family: {
    withRegards: [
      "Mr. R. Srinivasan - Lakshmi",
      "Mr. S. Ramesh - Meena",
      "Mr. K. Mahesh - Revathi",
      "Mr. V. Suresh - Kavitha"
    ],

    withBestCompliments: [
      "Karthik - Priya",
      "Vignesh - Divya",
      "Arun - Swetha",
      "Sathish - Nandhini",
      "Prakash - Anitha",
      "Ravi - Deepa"
    ],

    littleFlowers: [
      "Aadhira",
      "Aarav",
      "Dhruv",
      "Nila",
      "Rithvik",
      "Ishaan",
      "Ananya",
      "Kavin",
      "Diya"
    ],

    ourConcerns: [
      "Sri Lakshmi Textiles, Coimbatore",
      "Srinivasa Traders, Coimbatore",
      "Ramesh & Sons, Tiruppur"
    ]
  },

  rsvp: {
    enabled: true,
    targetWhatsApp: "918778614319",
    coordinators: [
      {
        name: "Ajay",
        tamilName: "Ajay",
        phone: "+918778614319",
        displayPhone: "+91 87786 14319",
        whatsappUrl: "https://wa.me/918778614319",
        callUrl: "tel:+918778614319"
      }
    ]
  },

  reminder: {
    title: "Save The Date on Your Calendar",
    tamilTitle: "Calendar Reminder",
    subtitle:
      "Your gracious presence, love, and heartfelt blessings will make our wedding celebration truly memorable.",
    instruction:
      "Click the button below to add to your Google or Apple calendar. An automated reminder will be triggered 1 week before and 1 hour before the wedding ceremony.",

    calendarEvent: {
      title: "Madhuprasath & Priyadharshini Wedding Ceremony",
      description:
        "Auspicious wedding celebration of Madhuprasath and Priyadharshini. Reception: Feb 07, 6:00 PM - 10:00 PM. Muhurtham: Feb 08, 6:00 AM - 7:00 AM. Venue: Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai.",
      location: "Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai",
      startDate: "20270208T060000",
      endDate: "20270208T070000"
    }
  },

  footer: {
    title: "Madhuprasath Weds Priyadharshini",
    date: "08-02-2027",
    creditText: "Designed with love by",
    creditLink: "https://ateliertechnologysolutions.com/"
  }
};

export const weddingConfigEn = weddingConfig;
export default weddingConfig;
