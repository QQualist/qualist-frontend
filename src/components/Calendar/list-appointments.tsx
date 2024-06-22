import { IAppointment } from "@/types/Appointments";
import Appointment from "./appointement";
import MoreAppoinments from "./more-appointements";

const ListAppointments = ({
  appointments,
}: {
  appointments: IAppointment[];
}) => {
  return (
    <div className="mt-1">
      {appointments.length < 4 && // If there are less than or equal to 4 appointments on the day
        appointments.map((appointment, index) => (
          <Appointment
            key={index}
            appointment={appointment}
          />
        ))}
      {appointments.length >= 4 && (
        <MoreAppoinments appointments={appointments} />
      )}
    </div>
  );
};

export default ListAppointments;
