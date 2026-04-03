import { Application } from "@/lib/schemas/";
import { Step } from "@/types";

export const defaultApplication: Application = {
  applicant: {
    fullName: "",
    ssn: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    country: "",
  },
  employment: {
    employmentStatus: "employed",
    employerName: "",
    employmentRatio: undefined,
  },
  partner: undefined,
  leave: {
    dateFrom: new Date(),
    dateTo: new Date(),
    employmentRatio: 25,
  },
  payment: {
    bankNr: "",
    ledger: "",
    accountNr: "",
  },
  documents: undefined,
};

export const applicationSteps: Step[] = [
  { stepNumber: 1, stepLabel: "applicant", completed: true, active: true },
  { stepNumber: 2, stepLabel: "employment", completed: false, active: false },
  { stepNumber: 3, stepLabel: "partner", completed: false, active: false },
  { stepNumber: 4, stepLabel: "leave", completed: false, active: false },
  { stepNumber: 5, stepLabel: "payment", completed: false, active: false },
  { stepNumber: 6, stepLabel: "documents", completed: false, active: false },
  { stepNumber: 7, stepLabel: "review", completed: false, active: false },
];
