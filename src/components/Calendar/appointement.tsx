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
import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

const checklists = [
  {
    uuid: "c4cd11cc-3f74-4bd1-8f42-29983880ff32",
    name: "Verificação e Validação",
  },
  {
    uuid: "31b6b374-e27b-4e86-809e-0bcb7e4b48d8",
    name: "Plano de projeto",
  },
  {
    uuid: "eba8860b-a6c4-4723-929e-2566c1628002",
    name: "Gerência de configuração",
  },
];

const Appointment = ({ appointment }: { appointment: IAppointment }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  const selectedLanguage = i18n.language;

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

  const formatDate = (date: Date) => {
    const weekDay = date
      ?.toLocaleString(selectedLanguage, { weekday: "long" })
      .replace(".", "");

    const dayAndMonth = date
      ?.toLocaleString(selectedLanguage, { day: "2-digit", month: "long" })
      .replace(".", "");

    const capitalizedWeekDay =
      weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

    return `${capitalizedWeekDay}, ${dayAndMonth} - ${format(date, "HH:mm")}`;
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

        <div className="flex flex-col gap-6">
          <div className="flex items-baseline gap-3 p-1">
            <div className="w-3 h-3 rounded-full bg-light-blue" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium">
                {appointment.description}
              </span>
              <span className="text-sm leading-5">
                {formatDate(appointment.date)}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-3">
            <Separator />
            <span className="font-semibold">{t("Reminders")}</span>
            <div className="flex gap-1 flex-wrap">
              <div className="flex gap-1 flex-wrap">
                <Badge variant="default" className="dark:text-white">
                  10 minutos antes
                </Badge>
                <Badge variant="default" className="dark:text-white">
                  20 minutos antes
                </Badge>
                <Badge variant="default" className="dark:text-white">
                  01 hora antes
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-3">
            <Separator />
            <span className="font-semibold">Checklists</span>

            <div className="flex gap-1 flex-wrap">
              {checklists.map((checklist) => (
                <Link to={`/checklist/${checklist.uuid}/items`} key={checklist.uuid}>
                  <Badge variant="default" className="dark:text-white">
                    {checklist.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Appointment;
