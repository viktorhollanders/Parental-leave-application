import { UseFormRegisterReturn, FieldError } from "react-hook-form";

type InputType = "text" | "number" | "email" | "tel";

export type InputProps = {
  id: string;
  label: string;
  inputType: InputType;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
};

export function Input({
  id,
  label,
  inputType,
  placeholder,
  register,
  errors,
}: InputProps) {
  return (
    <div className="flex flex-col gap-3 ">
      <label className="ml-6" htmlFor={id}>
        {label}
      </label>

      <input
        className="border border-brand-gray-300 rounded-full py-3 px-6 w-full"
        id={id}
        type={inputType}
        placeholder={placeholder}
        {...register}
      />
      {errors?.message && (
        <span className="ml-6 mt-2 text-[12px] text-brand-error">
          {errors.message}
        </span>
      )}
    </div>
  );
}
