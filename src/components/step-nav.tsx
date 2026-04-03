"use client";
import { useApplicationContext } from "@/context/use-applicatoin-context";
import { StepIndicator } from "./ui/step-inidactor";
import Link from "next/link";

export function StepNavigation() {
  const { steps } = useApplicationContext();

  return (
    <nav className="w-full px-3 pt-8 pb-4 m-auto md:m-w-[337px] md:pt-16 md:px-12.5 md:flex md:flex-col items-center bg-brand-gray-100  md:h-full ">
      <div className="flex flex-row md:flex-col justify-between md:justify-self-auto max-w-100 m-auto">
        <h1 className="hidden md:block text-[32px] font-bold text-brand-primary w-60 text-center mb-14">
          Parental leave application
        </h1>
        <div className="flex flex-row gap-2 md:flex-col md:mb-10">
          {steps
            .filter((s) => s.completed === true)
            .map((s) => {
              return (
                <Link key={s.stepNumber} href={`/application/${s.stepLabel}`}>
                  <StepIndicator
                    stepNumber={s.stepNumber}
                    stepLabel={s.stepLabel}
                    completed={s.completed}
                    active={s.active}
                  />
                </Link>
              );
            })}
        </div>

        <div className="flex flex-row gap-2 md:flex-col md:gap-10">
          {steps
            .filter((s) => s.completed === false)
            .map((s) => {
              return (
                <Link key={s.stepNumber} href={`/application/${s.stepLabel}`}>
                  <StepIndicator
                    key={s.stepNumber}
                    stepNumber={s.stepNumber}
                    stepLabel={s.stepLabel}
                    completed={s.completed}
                    active={s.active}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </nav>
  );
}
