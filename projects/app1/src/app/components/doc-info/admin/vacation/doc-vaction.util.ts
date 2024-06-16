import { Vacation } from '@app1/components/doc-info/admin/vacation/doc-vacation.model';
import { intervalToDuration } from 'date-fns';
import { formatGermanDayAndMonth } from 'jpd-core';

export function computeNextVacation(items: Array<Vacation>): string {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const next: Date = items[0].begin;
  const duration = intervalToDuration({
    start: now,
    end: next
  });
  const daysLeft = `in ${duration.days} Tagen`
  const start = formatGermanDayAndMonth(next);
  const end = formatGermanDayAndMonth(items[0].end);
  return `Vom ${start} bis ${end} sind wir im Urlaub (${daysLeft}).`
}
