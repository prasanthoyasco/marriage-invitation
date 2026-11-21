export interface CouplePerson {
  title?: string;
  name: string;
  fullName: string;
  tamilName?: string;
  labelTamil?: string;
  nameTransliteration?: string;
  role: 'Groom' | 'Bride';
  parents: {
    father: string;
    mother: string;
  };
  photo?: string;
}

export interface WeddingDates {
  wedding: string; // ISO 8601 string, e.g. "2026-11-29T09:00:00+05:30"
  engagement?: string;
  reception?: string;
  timezone?: string;
  displayWeddingDate: string;
  displayShortDate: string;
  displayTamilDate?: string;
}

export interface InvocationConfig {
  ganeshaMantra: {
    sanskrit: string;
    englishTransliteration?: string;
    meaning?: string;
  };
  blessings: {
    intro: string;
    elders: string[];
    invitationNote: string;
  };
}

export interface WeddingEvent {
  id: string;
  title: string;
  tamilTitle?: string;
  subtitle: string;
  tamilSubtitle?: string;
  date: string;
  tamilDate?: string;
  time: string;
  secondaryTime?: string;
  description?: string;
  tamilDescription?: string;
  venueName: string;
  address: string;
  mapsUrl: string;
  image: string;
  video?: string;
  videoPoster?: string;
  videoDurationText?: string;
  icon?: string;
}

export interface VenueDetail {
  id: string;
  type: string;
  name: string;
  address: string;
  mapsUrl: string;
}

export interface GuestWish {
  id: string;
  name: string;
  message: string;
  date?: string;
}

export interface FamilyMemberGroup {
  title: string;
  tamilTitle?: string;
  items: string[];
}

export interface RSVPCoordinator {
  name: string;
  tamilName?: string;
  phone: string;
  displayPhone: string;
  whatsappUrl: string;
  callUrl: string;
}

export interface TamilSloganConfig {
  poemLines: string[];
  source: string;
  meaning: string;
}

export interface DevotionalBlessingConfig {
  enabled: boolean;
  title: string;
  tamilTitle: string;
  subtitle: string;
  image: string;
  caption: string;
  tamilVerse: string;
}

export interface ContactAjayConfig {
  name: string;
  tamilName: string;
  role: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  note?: string;
}

export interface WeddingConfig {
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
  };
  openingCover: {
    video: string;
    animeVideo?: string;
    animeGif?: string;
    poster: string;
    firstInvitationCard?: string;
    tapHint: string;
  };
  audio: {
    src: string;
    fallbackSrc?: string;
    title: string;
    loop: boolean;
  };
  couple: {
    groom: CouplePerson;
    bride: CouplePerson;
    title: string;
    tamilTitle?: string;
    monogram?: string;
    subtitle: string;
    heroImage: string;
    portraitImage: string;
    firstInvitationCard?: string;
    animeVideo?: string;
    animeGif?: string;
  };
  dates: WeddingDates;
  invocation: InvocationConfig;
  slogan: TamilSloganConfig;
  devotionalBlessing: DevotionalBlessingConfig;
  contactAjay: ContactAjayConfig;
  events: WeddingEvent[];
  venues: VenueDetail[];
  wishes: GuestWish[];
  family: {
    withRegards: string[];
    withBestCompliments: string[];
    littleFlowers: string[];
    ourConcerns: string[];
  };
  rsvp: {
    enabled: boolean;
    targetWhatsApp?: string;
    coordinators: RSVPCoordinator[];
  };
  reminder: {
    title: string;
    tamilTitle?: string;
    subtitle: string;
    instruction: string;
    calendarEvent: {
      title: string;
      description: string;
      location: string;
      startDate: string; // "20261129T090000"
      endDate: string; // "20261129T130000"
    };
  };
  footer: {
    title: string;
    date: string;
    creditText: string;
    creditLink: string;
  };
}
