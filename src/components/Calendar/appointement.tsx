import { format } from "date-fns";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { IAppointment } from "@/types/Appointments";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAudit } from "@/utils/delete-audit";
import { useToast } from "../ui/use-toast";
import { isAxiosError } from "axios";
import { AuditData } from "@/types/audit";
import { restoreAudit } from "@/utils/restore-audit";

const Appointment = ({ appointment }: { appointment: IAppointment }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: deleteAudit,
    mutationKey: ["audits"],
    onSuccess: (_, appointmentId) => {
      queryClient.setQueryData<AuditData[]>(["audits"], (oldData = []) =>
        oldData.filter((audit) => audit.uuid !== appointmentId)
      );
      toast({
        variant: "default",
        title: "Success!",
        description: "Audit successfully canceled!",
        action: (
          <Button size="sm" onClick={handleRestoreAudit}>
            Undo
          </Button>
        ),
      });
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response) {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: error.response.data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: `An error occurred: ${error.message}`,
        });
      }
    },
  });

  const mutationRestoreAudit = useMutation({
    mutationFn: restoreAudit,
    mutationKey: ["audits"],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["audits"] });
      toast({
        variant: "default",
        title: "Success!",
        description: "Audit successfully restored!",
      });
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response) {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: error.response.data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: `An error occurred: ${error.message}`,
        });
      }
    },
  });

  const handleDeleteAppointment = () => {
    mutation.mutateAsync(appointment.uuid);
  };

  const handleRestoreAudit = () => {
    mutationRestoreAudit.mutateAsync(appointment.uuid);
  };

  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <div className="flex w-full items-center gap-2 text-sm hover:cursor-pointer hover:underline">
          <div className="w-1 h-1 rounded-full bg-light-blue" />
          <span className="w-4/5 truncate">
            {format(appointment.date, "HH:mm")}{" "}
            <span className="font-medium">{appointment.description}</span>
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full flex gap-1">
          <Button variant="ghost" className="w-max h-max p-2">
            <MdDelete
              size={24}
              className="text-dark-gray dark:text-light-gray"
              onClick={handleDeleteAppointment}
            />
          </Button>
          <Button variant="ghost" className="w-max h-max p-2">
            <MdEdit size={24} className="text-dark-gray dark:text-light-gray" />
          </Button>
        </div>
        <div>
          <span>{appointment.uuid}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Appointment;
