import { format, isSameDay, isSameMonth } from "date-fns";

interface IBoxDay {
  date: Date;
}

const BoxDay = ({ date }: IBoxDay) => {
  const isCurrentMonth = isSameMonth(date, new Date());
  const isToday = isSameDay(date, new Date());

  return (
    <div
      className={`w-full h-32 border border-light-gray/10 p-2
        ${!isCurrentMonth && "bg-light-gray/15"}
        ${isToday && "bg-light-blue border-2"}
      `}
    >
      <span
        className={`font-semibold 
            ${
              isCurrentMonth
                ? "dark:text-white"
                : "text-black/30 dark:text-light-gray/30"
            }
            ${isToday && "text-white"}
        `}
      >
        {format(date, "dd")}
      </span>
    </div>
  );
};

export default BoxDay;
