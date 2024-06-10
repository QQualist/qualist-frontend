import { intervalToDuration } from "date-fns";

// Function to convert deadline into an object with days, hours, minutes and deadline
export const convertDeadline = (deadline: number) => {
  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = intervalToDuration({ start: 0, end: deadline * 1000 });

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
