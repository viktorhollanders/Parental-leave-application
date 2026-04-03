import { cn } from "@/lib/utils";
import {
  Controller,
  Control,
  Path,
  FieldValues,
  ControllerProps,
} from "react-hook-form";

export type RadioInputProps<T extends FieldValues> = {
  id: string;
  label: string;
  value: string;
  name: Path<T>;
  control: Control<T>;
  rules?: ControllerProps<T, Path<T>>["rules"];
  disabled?: boolean;
  className?: string;
};

export function RadioButton<T extends FieldValues>({
  id,
  label,
  value,
  name,
  control,
  rules,
  disabled,
  className,
}: RadioInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <label
          htmlFor={id}
          className={cn(
            "relative inline-flex items-center gap-2",
            field.disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
        >
          <input
            type="radio"
            id={id}
            checked={field.value === value}
            value={value}
            onChange={() => field.onChange(value)}
            disabled={field.disabled}
            ref={field.ref}
            className="peer absolute opacity-0 w-0 h-0 sr-only"
          />
          <div
            className={cn(
              "rounded-full border-2 h-6 w-6 flex justify-center items-center bg-brand-gray-100",
              field.value === value
                ? "border-brand-primary"
                : "border-brand-gray-600",
            )}
          >
            <div
              className={cn(
                "rounded-full h-4 w-4",
                field.value === value
                  ? "bg-brand-primary"
                  : "bg-brand-gray-100",
              )}
            />
          </div>
          <span
            className={cn(
              field.value === value
                ? "text-brand-primary"
                : "text-brand-gray-600",
            )}
          >
            {label}
          </span>
        </label>
      )}
    />
  );
}
