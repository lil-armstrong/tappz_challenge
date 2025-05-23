import moment from "moment";
moment.defaultFormat = "Do MMM, H:mm a";
/**
 * Formats a given date string or Date object into a human-readable string.
 *
 * - If the date is the same as the current day, it returns a string in the format:
 *   "Today, {hour}{am/pm}" (e.g., "Today, 5pm").
 * - If the date is the day before the current day, it returns the string:
 *   "Yesterday".
 * - Otherwise, it returns a string in the format:
 *   "{day}, {day} {month}, {hour}{am/pm}" (e.g., "Fri, 30 May, 6pm").
 *
 * @param dateString - The date to format, provided as a string or a Date object.
 * @returns A formatted string representing the date.
 */
export function formatDate(dateString: string | Date): string {
  const date = moment(dateString);

  return date.calendar({
    sameDay: '[Today], H:mm a',
    lastDay: '[Yesterday], H:mm a',
    lastWeek: '[Last] dddd, H:mm a',
    sameElse: 'Do MMM YYYY, H:mm a'
}).toString()
}

