import type { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "மதுபிரசாத் & பிரியதர்ஷினி - திருமண அழைப்பிதழ்",
    description:
      "பெரியோர்களின் நல்லாசியுடன், மதுபிரசாத் மற்றும் பிரியதர்ஷினியின் சுபமுகூர்த்த திருமணத்திற்கு தங்களை அன்புடன் அழைக்கிறோம்.",
    siteUrl: "https://madhuprasadwedspriyadharshini.com",
    ogImage: "/assets/images/couple-portrait.jpg"
  },

  openingCover: {
    video: "/assets/images/couple-namaste.gif",
    animeVideo: "/assets/images/couple-namaste.gif",
    animeGif: "/Animated Indian Wedding Namaste Couple.gif",
    poster: "/Animated Indian Wedding Namaste Couple.gif",
    firstInvitationCard: "/assets/images/invitation-card.jpg",
    tapHint: "அழைப்பிதழைத் திறக்க"
  },

  audio: {
    src: "/assets/audio/malargal-keten.mp3",
    fallbackSrc: "/assets/audio/mangalam-shlok.mp3",
    title: "மலர்கள் கேட்டேன் 🎶",
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
    title: "மதுபிரசாத் weds பிரியதர்ஷினி",
    tamilTitle: "மதுபிரசாத் & பிரியதர்ஷினி திருமண விழா",
    monogram: "M & P",
    subtitle: "இரு மனங்கள் இணையும் இனிய தொடக்கம்",

    heroImage: "/assets/images/invitation-card.jpg",
    portraitImage: "/assets/images/invitation-card-back.jpg",
    firstInvitationCard: "/assets/images/invitation-card.jpg",
    animeVideo: "/assets/images/couple-namaste.gif",
    animeGif: "/Animated Indian Wedding Namaste Couple.gif",

    groom: {
      title: "",
      name: "மதுபிரசாத் R",
      fullName: "மதுபிரசாத் R (Madhuprasad R)",
      tamilName: "மதுபிரசாத் R",
      labelTamil: "மாப்பிள்ளை",
      nameTransliteration: "Madhuprasad R",
      role: "Groom",

      parents: {
        father: "திரு. R. சீனிவாசன்",
        mother: "திருமதி. லட்சுமி சீனிவாசன்"
      }
    },

    bride: {
      title: "",
      name: "பிரியதர்ஷினி J",
      fullName: "பிரியதர்ஷினி J (Priyadharshini J)",
      tamilName: "பிரியதர்ஷினி J",
      labelTamil: "மணப்பெண்",
      nameTransliteration: "Priyadharshini J",
      role: "Bride",

      parents: {
        father: "திரு. S. ரமேஷ்",
        mother: "திருமதி. மீனா ரமேஷ்"
      }
    }
  },

  dates: {
    wedding: "2027-02-08T06:00:00+05:30",
    engagement: "2027-02-07T18:00:00+05:30",
    reception: "2027-02-07T18:00:00+05:30",

    timezone: "Asia/Kolkata",

    displayWeddingDate: "பிப்ரவரி 8, 2027 (திங்கட்கிழமை)",
    displayShortDate: "08-02-2027",
    displayTamilDate: "பிப்ரவரி 08, 2027 (திங்கட்கிழமை)"
  },

  invocation: {
    ganeshaMantra: {
      sanskrit: "ஓம் ஸ்ரீ கணேசாய நமஹ • சுபமஸ்து",
      englishTransliteration: "Om Gam Ganapataye Namaha",
      meaning:
        "முழுமுதற் கடவுள் ஸ்ரீ விநாயகப் பெருமானின் திருவருளோடு, இல்லற வாழ்வு என்னும் இனிய பயணத்தை மகிழ்வோடு துவங்குகிறோம்."
    },

    blessings: {
      intro: "முன்னோர்களின் நல்லாசியுடன்",

      elders: [
        "மறைந்த திரு. R. சுப்பிரமணியன் & மறைந்த திருமதி. சரஸ்வதி",
        "மறைந்த திரு. S. கிருஷ்ணன் & மறைந்த திருமதி. ஜானகி"
      ],

      invitationNote:
        "எங்கள் இல்லத் திருமண விழாவிற்கு தாங்களும் தங்கள் குடும்பத்தாரும் வருகை தந்து மணமக்களை வாழ்த்தி அருள வேண்டுகிறோம்."
    }
  },

  events: [
    {
      id: "reception",
      title: "வரவேற்பு விழா & டிஜே இசை இரவு",
      tamilTitle: "வரவேற்பு விழா (Reception)",
      subtitle: "Reception • 6:00 PM - 10:00 PM",
      date: "பிப்ரவரி 07, 2027 (ஞாயிற்றுக்கிழமை)",
      tamilDate: "07-02-2027 ஞாயிற்றுக்கிழமை",
      time: "மாலை 6:00 மணி முதல் இரவு 10:00 மணி வரை (6:00 PM - 10:00 PM)",
      secondaryTime: "🎧 டிஜே இசை இரவு: இரவு 9:00 முதல் 10:00 வரை",
      description:
        "இனிய இசை, ஆனந்த நடனம் மற்றும் சுவையான அறுசுவை உணவோடு மணமக்களை வரவேற்று மகிழும் இனிய கொண்டாட்ட மாலை.",
      tamilDescription:
        "மணமக்கள் இணைந்து ஆடும் ஆனந்த நடனக் காட்சியோடு மாலை 6.00 மணி முதல் 10.00 மணி வரை வரவேற்பு விழாவும், இரவு 9.00 முதல் 10.00 மணி வரை துள்ளலான டிஜே இசை இரவும் நடைபெறும்.",
      venueName: "ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம்",
      address: "நங்கநல்லூர், சென்னை (Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai)",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai",
      image: "/assets/images/event-wedding.png",
      video: "/assets/video/reception-dance.mp4",
      videoPoster: "/assets/images/event-wedding.png",
      videoDurationText: "நடனக் காட்சி"
    },

    {
      id: "muhurtham",
      title: "புனித சுபமுகூர்த்தம் & தாலி கட்டுதல்",
      tamilTitle: "சுபமுகூர்த்தம் (Muhurtham)",
      subtitle: "Muhurtham • 6:00 AM - 7:00 AM",
      date: "பிப்ரவரி 08, 2027 (திங்கட்கிழமை)",
      tamilDate: "08-02-2027 திங்கட்கிழமை",
      time: "காலை 6:00 மணி முதல் காலை 7:00 மணி வரை (6:00 AM - 7:00 AM)",
      secondaryTime: "மாங்கல்ய தாரணம்: காலை 6:00 மணி முதல் 7:00 மணி வரை சுபவேளையில்",
      description:
        "மங்கள வாத்தியங்கள் முழங்க, பெரியோர்களின் அட்சதை ஆசியுடன் நடைபெறும் புனிதத் திருமாங்கல்ய தாரண சுப முகூர்த்தம்.",
      tamilDescription:
        "கெட்டிமேளம் கொட்டி, பொற்றாலி சூட்டி இருமனங்கள் இணையும் 10 நொடி புனித திருமாங்கல்ய தாரணத் தருணம்.",
      venueName: "ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம்",
      address: "நங்கநல்லூர், சென்னை (Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai)",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai",
      image: "Thaali-Kattudhal Wedding Ceremony Sequence.gif",
      video: "/assets/video/muhurtham-thaali.mp4",
      videoPoster: "/assets/images/Muhurtham.jpg",
      videoDurationText: "10 நொடி மாங்கல்ய தருணம்"
    }
  ],

  devotionalBlessing: {
    enabled: true,
    title: "ஸ்ரீ அனுமன் இதயத்தில் தெய்வீக தம்பதியர்",
    tamilTitle: "ராம பக்தன் ஸ்ரீ அனுமன் ஆசி",
    subtitle: "Ajay as Lord Hanuman Revealing the Couple in His Heart",
    video: "/assets/images/ajay-hanuman.mp4",
    image: "/assets/images/ajay-hanuman.gif",
    gif: "/assets/images/ajay-hanuman.gif",
    caption:
      "நெஞ்சைத் திறந்து சீதா ராமரைக் காட்டிய பக்த அனுமன் போல், இதயத்தில் நிறைந்து அருள் பாலிக்கும் தெய்வீகப் பாதுகாப்பு & பேரன்பு.",
    tamilVerse:
      "மனோஜவம் மாருத துல்ய வேகம்பூர்வ ஜன்ம புண்ணியத்தினால் வாய்த்த பந்தம் — ஸ்ரீ ஆஞ்சநேயரின் பொற்பாத ஆசியுடன் இணைபிரியாது வாழ்க வளமுடன்!"
  },

  contactAjay: {
    name: "அஜய்",
    tamilName: "அஜய்",
    role: "திருமண ஒருங்கிணைப்பாளர் / Contact Coordinator",
    phone: "+918778614319",
    displayPhone: "+91 87786 14319",
    whatsappNumber: "918778614319",
    note: "நிகழ்வு, தங்குமிடம் மற்றும் வழிகாட்டுதல்களுக்கு அஜயை எந்நேரமும் தொடர்பு கொள்ளலாம்."
  },

  venues: [
    {
      id: "venue-wedding",
      type: "திருமண மஹால் (Wedding Venue)",
      name: "ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம் (Sri Ranganayaki Kalyana Mandapam)",
      address: "ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம், நங்கநல்லூர், சென்னை (Nanganallur, Chennai)",
      mapsUrl: "https://maps.google.com/?q=Sri+Ranganayaki+Kalyana+Mandapam+Nanganallur+Chennai"
    }
  ],

  wishes: [
    {
      id: "w1",
      name: "கார்த்திக் & குடும்பத்தினர்",
      message: "அன்புத் தம்பதியர் மதுபிரசாத் - பிரியதர்ஷினிக்கு மனமார்ந்த திருமண நல்வாழ்த்துகள்! பல்லாண்டு வாழ்க வளமுடன்! 🌸💛"
    },
    {
      id: "w2",
      name: "பிரியா",
      message: "இனிய இல்லற வாழ்வு ஆனந்தமாகவும், சகல செல்வங்களும் நிறைந்ததாகவும் அமைய வாழ்த்துகிறேன்! 💐❤️"
    },
    {
      id: "w3",
      name: "விக்னேஷ் & திவ்யா",
      message: "உங்கள் வாழ்வில் என்றும் அன்பும் மகிழ்ச்சியும் குறையாமல் பொங்கட்டும்! இனிய திருமண நல்வாழ்த்துகள்! 💍✨"
    }
  ],

  family: {
    withRegards: [
      "திரு. R. சீனிவாசன் - லட்சுமி",
      "திரு. S. ரமேஷ் - மீனா",
      "திரு. K. மகேஷ் - ரேவதி",
      "திரு. V. சுரேஷ் - கவிதா"
    ],

    withBestCompliments: [
      "கார்த்திக் - பிரியா",
      "விக்னேஷ் - திவ்யா",
      "அருண் - ஸ்வேதா",
      "சதீஷ் - நந்தினி",
      "பிரகாஷ் - அனிதா",
      "ரவி - தீபா"
    ],

    littleFlowers: [
      "ஆதிரா",
      "ஆரவ்",
      "துருவ்",
      "நிலா",
      "ரித்விக்",
      "இஷான்",
      "அனன்யா",
      "கவின்",
      "தியா"
    ],

    ourConcerns: [
      "ஸ்ரீ லட்சுமி டெக்ஸ்டைல்ஸ், கோயம்புத்தூர்",
      "சீனிவாசா டிரேடர்ஸ், கோயம்புத்தூர்",
      "ரமேஷ் & சன்ஸ், திருப்பூர்"
    ]
  },

  rsvp: {
    enabled: true,
    targetWhatsApp: "918778614319",
    coordinators: [
      {
        name: "அஜய்",
        tamilName: "அஜய்",
        phone: "+918778614319",
        displayPhone: "+91 87786 14319",
        whatsappUrl: "https://wa.me/918778614319",
        callUrl: "tel:+918778614319"
      }
    ]
  },

  reminder: {
    title: "திருமண நன்னாளை நாட்காட்டியில் குறித்துக் கொள்ளவும்",
    tamilTitle: "நாட்காட்டி நினைவூட்டல்",
    subtitle:
      "தங்கள் பொன்னான வருகையும் ஆசிகளும் எங்கள் திருமண விழாவை மேலும் சிறப்படையச் செய்யும்.",
    instruction:
      "கீழேயுள்ள பொத்தானை அழுத்தி உங்கள் Google அல்லது Apple நாட்காட்டியில் சேர்க்கலாம். திருமணத்திற்கு 1 வாரத்திற்கு முன்பும் மற்றும் 1 மணி நேரத்திற்கு முன்பும் தானாகவே நினைவூட்டல் (Reminder) தோன்றும்.",

    calendarEvent: {
      title: "மதுபிரசாத் & பிரியதர்ஷினி திருமண விழா (Madhuprasad & Priyadharshini Wedding)",
      description:
        "மதுபிரசாத் மற்றும் பிரியதர்ஷினியின் சுபமுகூர்த்த திருமண விழா. வரவேற்பு: பிப்ரவரி 07 மாலை 6:00 முதல் 10:00 வரை, சுபமுகூர்த்தம்: பிப்ரவரி 08 காலை 6:00 முதல் 7:00 வரை. இடம்: ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம், நங்கநல்லூர், சென்னை.",
      location: "Sri Ranganayaki Kalyana Mandapam, Nanganallur, Chennai",
      startDate: "20270208T060000",
      endDate: "20270208T070000"
    }
  },

  footer: {
    title: "மதுபிரசாத் weds பிரியதர்ஷினி",
    date: "08-02-2027",
    creditText: "அன்போடு வடிவமைக்கப்பட்டது",
    creditLink: "https://ateliertechnologysolutions.com/"
  }
};
