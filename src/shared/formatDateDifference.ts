import * as moment from 'moment';

export function formatDateDifference(firstDateToCompare: Date, dateToCompare: string) {
  const currentDate = moment(firstDateToCompare);
  const momentToCompare = moment(dateToCompare);
  const durationDifference = moment.duration(currentDate.diff(momentToCompare));

  return durationDifference.humanize(true).substring(3);
}