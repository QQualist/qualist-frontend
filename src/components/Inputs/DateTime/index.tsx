import DateTimeError from "./DateTimeError";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Label } from "@/components/ui/label";

interface IDateTimeInput {
  id: string;
  label: string;
  error: string | undefined;
  value: Date | null | undefined,
  onChange: (date: Date) => void
}

const DateTimeInput = ({ id, label, value, onChange, error }: IDateTimeInput) => {
  return (
    <div className="w-full h-max flex flex-col gap-1">
      <Label htmlFor={id}>{label}</Label>
      <DateTimePicker jsDate={value} onJsDateChange={onChange} granularity="minute" />
      {error && <DateTimeError>{error}</DateTimeError>}
    </div>
  );
};

export default DateTimeInput;
