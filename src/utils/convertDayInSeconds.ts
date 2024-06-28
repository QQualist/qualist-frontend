import { addDays, differenceInSeconds } from "date-fns";

export const convertDayInSeconds = (days: number): number => {
    const now = new Date();

    const futureDate = addDays(now, days);

    return differenceInSeconds(futureDate, now)
}