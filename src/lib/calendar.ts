export interface CalendarEventParams {
  title: string;
  description: string;
  location: string;
  startDate: string; // Format: "YYYYMMDDTHHmmss" (UTC or Local)
  endDate: string;   // Format: "YYYYMMDDTHHmmss"
}

export function generateGoogleCalendarUrl(event: CalendarEventParams): string {
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: event.title,
    dates: `${event.startDate}/${event.endDate}`,
    details: event.description,
    location: event.location,
    sf: "true",
    output: "xml"
  });

  return `${baseUrl}&${params.toString()}`;
}

/**
 * Generates and triggers download of an .ics iCalendar file
 * with dual built-in alarms (reminders):
 * - 1 week before (-P7D)
 * - 1 hour before (-PT1H)
 */
export function downloadIcsWithReminders(event: CalendarEventParams): void {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Atelier//Tamil Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title.replace(/[,;]/g, ' ')}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location.replace(/[,;]/g, ' ')}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    'STATUS:CONFIRMED',
    // 1 Week Before Reminder
    'BEGIN:VALARM',
    'TRIGGER:-P7D',
    'ACTION:DISPLAY',
    `DESCRIPTION:நினைவூட்டல்: 1 வாரத்தில் அர்ஜுன் & மீனாட்சி திருமண விழா (${event.title})`,
    'END:VALARM',
    // 1 Hour Before Reminder
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    `DESCRIPTION:நினைவூட்டல்: இன்னும் 1 மணி நேரத்தில் திருமண விழா துவங்குகிறது (${event.title})`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'wedding-reminder.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
