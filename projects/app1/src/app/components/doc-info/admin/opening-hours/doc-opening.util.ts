import { DailyOpeningHours } from '@app1/components/doc-info/admin/opening-hours/doc-opening.model';
import { getDay, isBefore, isWithinInterval } from 'date-fns';

export function computeNextOpening(items: Array<DailyOpeningHours>): string {
  const now = new Date();
  const todayIndex = getDay(now) - 1;
  const openingDay = items[todayIndex];

  if (!openingDay) {
    return 'geschlossen. ' + `öffnet wieder am Montag ${items[0].morningBegin}`
  } else if (isBefore(now, openingDay.morningBegin)) {
    return `öffnet nachher um ${openingDay.morningBegin}`
  } else if (isWithin(openingDay.morningBegin, openingDay.morningEnd)) {
    return `geöffnet. schließt ${openingDay.morningEnd}`
  } else if (isWithin(openingDay.morningEnd, openingDay.afterNoonBegin)) {
    return `geschlossen. öffnet nachher um ${openingDay.afterNoonBegin}`
  } else if (isWithin(openingDay.afterNoonBegin, openingDay.afterNoonEnd)) {
    return `geöffnet. schließt ${openingDay.afterNoonEnd}`
  } else if (todayIndex === 4) {
    return 'geschlossen. ' + `öffnet wieder am Montag ${items[0].morningBegin}`
  } else {
    return 'geschlossen. ' + `öffnet morgen ${items[todayIndex + 1].morningBegin}`
  }
}

function isWithin(hourAndMinStart: string, hourAndMinEnd: string): boolean {
  const hourMinStart = hourAndMinStart.split(':');
  const begin = new Date();
  begin.setHours(Number(hourMinStart[0]));
  begin.setMinutes(Number(hourMinStart[1]));

  const hourMinEnd = hourAndMinEnd.split(':');
  const end = new Date();
  end.setHours(Number(hourMinEnd[0]));
  end.setMinutes(Number(hourMinEnd[1]));

  return isWithinInterval(new Date(), {
    start: begin,
    end: end
  });
}
