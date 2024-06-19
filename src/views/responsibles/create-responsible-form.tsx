import { Combobox } from "@/components/Inputs/Combobox";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { createResponsibleSchema } from "@/schemas/responsible/create-responsible";
import { ContextUser } from "@/types/ContextUser";
import { CreateResponsibleData } from "@/types/create-responsible";
import { createResponsible } from "@/utils/create-responsible";
import { getRoles } from "@/utils/getRoles";
import { getUserTypes } from "@/utils/getUserTypes";
import { getUsers } from "@/utils/getUsers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

interface ICreateResponsibleForm {
  onClose: () => void;
}

const CreateResponsibleForm = ({ onClose }: ICreateResponsibleForm) => {
  const { departamentUuid } = useParams();
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    setValue,
    reset,
    register,
    trigger,
    formState: { errors },
  } = useForm<CreateResponsibleData>({
    resolver: zodResolver(createResponsibleSchema),
    defaultValues: {
      departament_uuid: departamentUuid,
    },
  });

  const mutation = useMutation({
    mutationKey: ["responsibles", departamentUuid],
    mutationFn: createResponsible,
    onSuccess: () => {
      // Refetch the responsibles query to ensure data is up-to-date
      queryClient.invalidateQueries({ queryKey: ["responsibles"] });

      // Refetch the roles query to ensure data is up-to-date
      queryClient.invalidateQueries({ queryKey: ["roles"] });

      // Invalidates the "users" query to update the list of users
      queryClient.invalidateQueries({ queryKey: ["users"] });

      toast({
        variant: "success",
        title: "Success!",
        description: "User successfully created",
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

  const sendForm = (data: CreateResponsibleData) => {
    if (user) {
      // If you don't have a user, sign out
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  if (!departamentUuid) {
    navigate("/departaments");
    return null;
  }

  return (
    <DialogContent className="overflow-y-auto max-h-[80%]">
      <DialogHeader>
        <DialogTitle>Create responsible</DialogTitle>
        <DialogDescription>
          Create your responsible here. Click save when you're finished.
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
        <TextField.Root error={errors.email && errors.email.message}>
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
            onSelect={(e) => {
              setValue("type_id", e as number);
              trigger("type_id");
            }}
            placeholder="Select a user type"
          />
        </Combobox.Root>

        <Combobox.Root
          error={errors.role_uuid && errors.role_uuid.message}
        >
          <Label>Role</Label>
          <Combobox.Input
            data={roles}
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
  );
};

export default CreateResponsibleForm;
