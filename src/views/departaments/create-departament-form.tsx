import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { createDepartamentSchema } from "@/schemas/departaments/create-departament";
import { CreateDepartamentData } from "@/types/create-departament";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ICreateDepartamentForm {
  onClose: () => void;
}

const CreateDepartamentForm = ({ onClose }: ICreateDepartamentForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateDepartamentData>({
    resolver: zodResolver(createDepartamentSchema),
  });

  const sendForm = (data: CreateDepartamentData) => {
    alert(data.name);
    reset();
    onClose();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create departament</DialogTitle>
        <DialogDescription>
          Create your departament here. Click save when you're finished.
        </DialogDescription>
      </DialogHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendForm)}>
        <TextField.Root error={errors.name && errors.name.message}>
          <Label htmlFor="departament-name">Name</Label>
          <TextField.Content>
            <TextField.Input
              id="departament-name"
              placeholder={"Eg: Quality assurance"}
              type="text"
              register={register("name")}
            />
          </TextField.Content>
        </TextField.Root>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateDepartamentForm;
