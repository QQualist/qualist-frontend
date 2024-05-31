
export const convertSecondsInDay = (seconds: number): number => {
    const secondsInDay = 24 * 60 * 60; // Number of seconds in a day 
    const days = seconds / secondsInDay; // Divide the seconds by the number of seconds in a day
    return days;

}