import { format, isSameDay, isSameMonth } from "date-fns";
import { useTranslation } from "react-i18next";
import Appointment from "./appointement";
import ListAppointments from "./list-appointments";

interface Appointment {
  date: Date;
  description: string;
  [key: string]: unknown;
}

interface IBoxDay {
  date: Date;
  appointments: Appointment[];
}

const BoxDay = ({ date, appointments }: IBoxDay) => {
  const isCurrentMonth = isSameMonth(date, new Date());
  const isToday = isSameDay(date, new Date());
  const { t } = useTranslation();

  return (
    <div
      className={`w-full h-32 border border-light-gray/10 p-2
        ${!isCurrentMonth && "bg-light-gray/15"}
        ${isToday && "border-light-blue border"}
      `}
    >
      <div className="flex items-center justify-between gap-1">
        <span
          className={`font-semibold 
            ${
              isCurrentMonth
                ? "dark:text-white"
                : "text-black/30 dark:text-light-gray/30"
            }
        `}
        >
          {format(date, "dd")}
        </span>
        {isToday && <span className="text-xs dark:text-white">{t("Today")}</span>}
      </div>
      <ListAppointments appointments={appointments} />
    </div>
  );
};

export default BoxDay;
