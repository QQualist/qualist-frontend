import Appointment from "./appointement";
import MoreAppoinments from "./more-appointements";

interface IAppointment {
  date: Date;
  description: string;
}

const ListAppointments = ({
  appointments,
}: {
  appointments: IAppointment[];
}) => {
  return (
    <div className="mt-1">
      {appointments.length <= 2 && // If there are less than or equal to 4 appointments on the day
        appointments.map((appointment, index) => (
          <Appointment
            key={index}
            date={appointment.date}
            description={appointment.description}
          />
        ))}
      {appointments.length >= 4 && (
        <MoreAppoinments appointments={appointments} />
      )}
    </div>
  );
};

export default ListAppointments;
