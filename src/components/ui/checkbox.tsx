import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

import {
  Controller,
  Control,
  Path,
  FieldValues,
  ControllerProps,
} from "react-hook-form";

export type CheckboxInputProps<T extends FieldValues> = {
  id: string;
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: ControllerProps<T, Path<T>>["rules"];
  disabled?: boolean;
  className?: string;
};

export function Checkbox<T extends FieldValues>({
  id,
  label,
  name,
  control,
  rules,
  disabled,
  className,
}: CheckboxInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <label
          className={cn(
            "relative inline-flex items-center gap-2",
            field.disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
          htmlFor={id}
        >
          <input
            type="checkbox"
            id={id}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
            disabled={field.disabled}
            ref={field.ref}
            className="peer absolute opacity-0 w-0 h-0 sr-only"
          />
          <div
            className={cn(
              "border-brand-primary rounded-xs border-2 h-6 w-6 flex justify-center items-center",
              field.value ? "bg-brand-primary" : "bg-none",
            )}
          >
            {field.value ? (
              <Check
                className="text-brand-gray-100"
                strokeWidth={3}
                size={24}
              />
            ) : null}
          </div>
          {label}
        </label>
      )}
    />
  );
}
