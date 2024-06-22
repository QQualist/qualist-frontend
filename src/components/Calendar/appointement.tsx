import { format } from "date-fns";

interface IAppointment {
  date: Date;
  description: string;
}

const Appointment = ({ date, description }: IAppointment) => {
  return (
    <div className="flex w-full items-center gap-2 text-sm hover:cursor-pointer">
      <div className='w-1 h-1 rounded-full bg-light-blue' />
      <span className='w-4/5 truncate'>
        {format(date, "HH:mm")} <span className="font-medium">{description}</span>
      </span>
    </div>
  );
};

export default Appointment;
