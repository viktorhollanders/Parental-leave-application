"use client";
import { createContext, useCallback, useState } from "react";
import { defaultApplication, applicationSteps } from "./application-default";
import { Application, Step } from "@/types";

interface ApplicationContextType {
  application: Application;
  steps: Step[];
  updateApplication: (
    step: keyof Application,
    data: Partial<Application[keyof Application]>,
  ) => void;
  completeStep: (step: number) => void;
  addDocuments: (files: File[]) => void;
  removeDocument: (fileId: string) => void;
}

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null,
);

export function ApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [application, setApplication] =
    useState<Application>(defaultApplication);
  const [steps, setSteps] = useState<Step[]>(applicationSteps);

  const updateApplication = useCallback(
    (
      step: keyof Application,
      data: Partial<Application[keyof Application]>,
    ) => {
      setApplication({
        ...application,
        [step]: { ...application![step], ...data },
      });
    },
    [application],
  );

  const completeStep = useCallback(
    (stepNumber: number) => {
      return setSteps(
        steps.map((s) => {
          if (stepNumber === s.stepNumber) {
            return { ...s, completed: true };
          }
          return s;
        }),
      );
    },
    [steps],
  );

  const addDocuments = useCallback(
    (files: File[]) => {
      setApplication({
        ...application,
        documents: {
          files: [
            ...(application.documents?.files ?? []),
            ...files.map((f) => {
              const id = crypto.randomUUID();
              return { id, file: f };
            }),
          ],
        },
      });
    },
    [application],
  );

  const removeDocument = useCallback(
    (fileId: string) => {
      setApplication({
        ...application,
        documents: {
          files: (application.documents?.files ?? []).filter(
            (f) => f.id !== fileId,
          ),
        },
      });
    },
    [application],
  );

  return (
    <ApplicationContext
      value={{
        application,
        steps,
        completeStep,
        updateApplication,
        addDocuments,
        removeDocument,
      }}
    >
      {children}
    </ApplicationContext>
  );
}
