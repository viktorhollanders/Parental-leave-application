import { Step } from "@/types";

export function StepIndicator({
  stepNumber,
  stepLabel,
  completed,
  active,
}: Step) {
  return (
    <div className="flex flex-row items-center gap-1 md:gap-2">
      <div
        className={`size-6 md:size-8 rounded-full flex justify-center items-center ${completed ? "bg-brand-primary" : "bg-brand-gray-600"}`}
      >
        <span
          className={`text-center text-2xl text-brand-gray-100 ${completed ? "font-bold" : ""}`}
        >
          {stepNumber}
        </span>
      </div>
      <h3
        className={`capitalize ${active ? "block" : "hidden md:block"} text-[16px] md:text-2xl ${completed ? "text-brand-primary font-bold " : "text-brand-gray-600"}`}
      >
        {stepLabel}
      </h3>
    </div>
  );
}
