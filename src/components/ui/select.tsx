import { ChevronDown } from "lucide-react";
import { SelectOption } from "@/types";
import {
  Controller,
  Control,
  Path,
  FieldValues,
  ControllerProps,
} from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  id: string;
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder: string;
  options: SelectOption[];
  rules?: ControllerProps<T, Path<T>>["rules"];
  disabled?: boolean;
};

export function Select<T extends FieldValues>({
  id,
  name,
  control,
  placeholder,
  options,
  rules,
  disabled,
}: SelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <div className="relative border border-brand-gray-600 p-3 rounded-3xl flex flex-row justify-center">
          <select
            {...field}
            id={id}
            className="w-full absolute inset-0 opacity-0 cursor-pointer"
          >
            <option value="">{placeholder}</option>

            {options.map((opt: SelectOption) => {
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })}
          </select>
          <span className="pl-3 text-sm text-gray-700 flex-1">
            {field.value
              ? options.find((o) => o.value === field.value)?.label
              : placeholder}
          </span>

          <ChevronDown
            className="text-brand-primary absolute right-5 pointer-events-none"
            size={23}
          />
        </div>
      )}
    />
  );
}
