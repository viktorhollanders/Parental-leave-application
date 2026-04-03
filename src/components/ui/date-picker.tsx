import { ChevronDown } from "lucide-react";

import { RefObject, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";

import { useClickOutside } from "@/hooks/useClickOutside";

import { Button } from "./button";
import { useKeyDown } from "@/hooks/useKeyDown";

type DatePickerProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: ControllerProps<T, Path<T>>["rules"];
  disabled?: boolean;
};

export function DatePicker<T extends FieldValues>({
  label,
  name,
  control,
  rules,
  disabled,
}: DatePickerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const datePickerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(datePickerRef as RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );

  useKeyDown("Escape", () => setIsOpen(false));

  function toggleDatePicker() {
    setIsOpen((prev) => !prev);
    console.log("I got clicked");
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <div className="relative flex flex-col gap-3" ref={datePickerRef}>
          <label className="ml-6">{label}</label>
          <div className="flex flex-row items-center border rounded-3xl py-3 px-6">
            <input
              type="date"
              className="w-full mr-10 [&::-webkit-calendar-picker-indicator]:hidden"
              value={
                (field.value as unknown) instanceof Date
                  ? (field.value as Date).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) => {
                const date = new Date(e.target.value + "T00:00:00");
                if (!isNaN(date.getTime())) field.onChange(date);
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={() => {
                toggleDatePicker();
              }}
            >
              <ChevronDown className="text-brand-primary" size={24} />
            </Button>
          </div>
          <div
            className={`bg-white mt-2 p-3 rounded-3xl  absolute top-full left-1/2 -translate-x-1/2 ${isOpen ? "block" : "hidden"}`}
          >
            <DayPicker
              animate
              mode="single"
              selected={field.value}
              onSelect={(date) => date && field.onChange(date)}
            />
          </div>
        </div>
      )}
    />
  );
}
