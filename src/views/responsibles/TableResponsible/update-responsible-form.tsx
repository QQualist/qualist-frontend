import { Combobox } from "@/components/Inputs/Combobox";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { updateResponsibleSchema } from "@/schemas/responsible/update-responsible";
import { ContextUser } from "@/types/ContextUser";
import { ResponsibleData } from "@/types/responsible";
import { UpdateResponsibleData } from "@/types/update-responsible";
import { getRoles } from "@/utils/getRoles";
import { getUserTypes } from "@/utils/getUserTypes";
import { getUsers } from "@/utils/getUsers";
import { updateResponsible } from "@/utils/update-responsible";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Row } from "@tanstack/react-table";
import { isAxiosError } from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IUpdateResponsible {
  row: Row<ResponsibleData>;
  open: boolean;
  onClose: () => void;
}

const UpdateResponsibleForm = ({ row, open, onClose }: IUpdateResponsible) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<UpdateResponsibleData>({
    resolver: zodResolver(updateResponsibleSchema),
    defaultValues: {
      name: row.original.name,
      surname: row.original.surname,
      email: row.original.email,
      role_uuid: row.original.role.uuid,
      superior_uuid: row.original.superior?.uuid,
      type_id: row.original.type.id,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: UpdateResponsibleData) => {
      return updateResponsible(row.getValue("uuid"), data);
    },
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["responsibles"] });
      toast({
        variant: "success",
        title: "Success!",
        description: "Responsible successfully updated",
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

  const { data: user_types = [] } = useQuery({
    queryKey: ["user-types"],
    queryFn: getUserTypes,
    select: (data) =>
      data.map((user_type) => ({
        value: user_type.id,
        label: user_type.name
          .toLowerCase()
          .replace(/\b\w/g, (char: string) => char.toUpperCase()),
      })),
  });

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    select: (data) =>
      data.map((person) => ({
        value: person.uuid,
        label: `${person.name} ${person.surname} ${
          person.uuid === user?.uuid ? ` - ${t("You")}` : ""
        }`,
      })),
  });

  const { data: roles = [] } = useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
    select: (data) =>
      data.map((role) => ({
        value: role.uuid,
        label: role.name,
      })),
  });

  const sendForm = (data: UpdateResponsibleData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  useEffect(() => {
    if (row) {
      setValue("name", row.original.name);
      setValue("surname", row.original.surname);
      setValue("email", row.original.email);
      setValue("role_uuid", row.original.role.uuid);
      setValue("type_id", row.original.type.id);
      setValue("superior_uuid", row.original.superior?.uuid);
    }
  }, [row, setValue]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="overflow-y-auto max-h-[80%]">
        <DialogHeader>
          <DialogTitle>Update responsible</DialogTitle>
          <DialogDescription>
            Update your responsible here. Click save when you're finished.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
          <div className="flex gap-2">
            <TextField.Root error={errors.name && errors.name.message}>
              <Label htmlFor="responsible-name">Name</Label>
              <TextField.Content>
                <TextField.Input
                  id="responsible-name"
                  placeholder={"Eg: James"}
                  type="text"
                  register={register("name")}
                />
              </TextField.Content>
            </TextField.Root>
            <TextField.Root error={errors.surname && errors.surname.message}>
              <Label htmlFor="responsible-surname">Surname</Label>
              <TextField.Content>
                <TextField.Input
                  id="responsible-surname"
                  placeholder={"Eg: Smith"}
                  type="text"
                  register={register("surname")}
                />
              </TextField.Content>
            </TextField.Root>
          </div>
          <TextField.Root error="">
            <Label htmlFor="responsible-email">Email</Label>
            <TextField.Content>
              <TextField.Input
                id="responsible-email"
                placeholder={"Eg: james.smith@example.com"}
                type="text"
                register={register("email")}
              />
            </TextField.Content>
          </TextField.Root>

          <Combobox.Root error={errors.type_id && errors.type_id.message}>
            <Label>Type</Label>
            <Combobox.Input
              data={user_types}
              initialValue={row.original.type.id}
              onSelect={(e) => {
                setValue("type_id", e as number);
                trigger("type_id");
              }}
              placeholder="Select a user type"
            />
          </Combobox.Root>

          <Combobox.Root error={errors.role_uuid && errors.role_uuid.message}>
            <Label>Role</Label>
            <Combobox.Input
              data={roles}
              initialValue={row.original.role.uuid}
              onSelect={(e) => {
                setValue("role_uuid", e as string);
                trigger("role_uuid");
              }}
              placeholder="Select a role"
            />
          </Combobox.Root>

          <Combobox.Root
            error={errors.superior_uuid && errors.superior_uuid.message}
          >
            <Label isOptional>Superior</Label>
            <Combobox.Input
              data={users}
              initialValue={row.original.superior?.uuid}
              onSelect={(e) => {
                setValue("superior_uuid", e as string);
                trigger("superior_uuid");
              }}
              placeholder="Select a superior"
            />
          </Combobox.Root>

          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateResponsibleForm;
