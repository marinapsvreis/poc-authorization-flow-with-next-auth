import { Input } from "../ui/input";

interface InputBoxProps {
  register: any;
  errors: any;
  label: string;
  name: string;
  type: string;
}

export default function InputBox({
  register,
  errors,
  label,
  name,
  type,
}: InputBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email">{label}</label>
      <Input type={type} name={name} {...register(name)} />
      <div className="text-red-500">
        {(errors.email && errors.email.message)?.toString()}
      </div>
    </div>
  );
}
