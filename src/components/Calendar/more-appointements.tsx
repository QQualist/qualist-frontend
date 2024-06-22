import { IAppointment } from "@/types/Appointments";
import { Button } from "../ui/button";
import Appointment from "./appointement";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isSameDay } from "date-fns";

const MoreAppoinments = ({
  appointments, //Only appointments of the day
}: {
  appointments: IAppointment[];
}) => {
  const isToday = isSameDay(appointments[0].date, new Date());

  return (
    <div className="flex flex-col gap-1">
      {/* Render first appointement of day */}
      <Appointment
       appointment={appointments[0]}
      />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className="flex w-full h-6 justify-start px-2.5 py-0.5 text-xs dark:bg-secondary"
          >
            More {appointments.length - 1} items
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col w-80 gap-2" align="start">
          <div className="w-full flex justify-center items-center">
            <div
              className={`flex w-8 h-8 items-center justify-center font-semibold text-white ${
                isToday && "bg-light-blue rounded-full"
              }`}
            >
              {format(appointments[0].date, "dd")}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {appointments.map((appointment, index) => (
              <>
                {/* The first one has already been rendered in the calendar */}
                {index !== 0 && (
                  <Appointment
                    appointment={appointment}
                  />
                )}
              </>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MoreAppoinments;
