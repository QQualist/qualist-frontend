import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import DaysWeek from "./days-week";
import BoxDay from "./box-day";
import Header from "./header";

interface Appointment {
  date: Date;
  description: string;
  [key: string]: unknown;
}

const Calendar = ({ appointments }: { appointments: Appointment[] }) => {
  const currentDate = new Date();
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1);

  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(new Date(year, month - 1));

  const startDayOfWeek = startOfWeek(firstDayOfMonth);
  const endDayOfWeek = endOfWeek(lastDayOfMonth);

  const daysOfMonth = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  const handleNextMonth = () => {
    const nextMonthDate = addMonths(firstDayOfMonth, 1);
    setYear(nextMonthDate.getFullYear());
    setMonth(nextMonthDate.getMonth() + 1);
  };

  const handlePreviousMonth = () => {
    const previousMonthDate = subMonths(firstDayOfMonth, 1);
    setYear(previousMonthDate.getFullYear());
    setMonth(previousMonthDate.getMonth() + 1);
  };

  appointments.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div>
      <Header
        date={firstDayOfMonth}
        onNextMonth={handleNextMonth}
        onPrevMonth={handlePreviousMonth}
      />
      <div className="grid grid-cols-7">
        <DaysWeek year={year} month={month} />
        {daysOfMonth.map((date, index) => (
          <BoxDay
            key={index}
            date={date}
            appointments={appointments.filter(
              (appointment) =>
                appointment.date.toDateString() === date.toDateString()
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
