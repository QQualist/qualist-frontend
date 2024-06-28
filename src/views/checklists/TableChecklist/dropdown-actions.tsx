import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChecklistData } from "@/types/Checklist";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Row } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/api/api";
import { useNavigate } from "react-router-dom";
import { copyToClipboard } from "@/utils/copyToClipboard";

interface IDropdownActions {
  row: Row<ChecklistData>;
  onOpen: () => void;
}

const DropdownActions = ({ row, onOpen }: IDropdownActions) => {
  const { user } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const deprecateChecklist = async () => {
    return await api.patch(`/checklists/${row.getValue("uuid")}`, 
    {
      active: false
    },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });
  };

  const enableChecklist = async () => {
    return await api.patch(
      `/checklists/${row.getValue("uuid")}`,
      {
        active: true,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
  };

  const mutationEnableChecklist = useMutation({
    mutationFn: enableChecklist,
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["checklists"] });
      toast({
        variant: "success",
        title: "Done!",
        description: "Checklist active again!",
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

  const mutationDeprecatedChecklist = useMutation({
    mutationFn: deprecateChecklist,
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["checklists"] });
      toast({
        variant: "default",
        title: "Success!",
        description: "Checklist successfully deprecated!",
        action: (
          <Button
            size="sm"
            onClick={() => mutationEnableChecklist.mutateAsync()}
          >
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

  const handleViewItems = () => {
    const uuid = row.getValue("uuid");
    navigate(`/checklist/${uuid}/items`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full flex justify-center">
            <Button variant="ghost" className="flex justify-center w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MdOutlineMoreHoriz className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="space-y-1">
          <DropdownMenuLabel className="w-full flex justify-between">
            <span>{t("Actions")}</span>
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyToClipboard(row.getValue("uuid"))}
          >
            Copy checklist code
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleViewItems}>
            View items
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer" onClick={onOpen}>
            Update
          </DropdownMenuItem>

          {/*Render if checklist is active*/}
          {(row.getValue("active") === 1 ||
            row.getValue("active") === true) && ( // Checklist = 1 (Checklist active)
            <DropdownMenuItem
              className="cursor-pointer bg-red text-white hover:bg-red/90 dark:hover:bg-red/90"
              onClick={() => mutationDeprecatedChecklist.mutateAsync()}
            >
              Deprecate checklist
            </DropdownMenuItem>
          )}

          {/*Render if checklist is not active*/}
          {(row.getValue("active") === 0 ||
            row.getValue("active") === false) && ( // Checklist = 1 (Checklist active)
            <DropdownMenuItem
              className="cursor-pointer bg-success text-white hover:bg-success/90 dark:hover:bg-success/90"
              onClick={() => mutationEnableChecklist.mutateAsync()}
            >
              Enable checklist
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownActions;
