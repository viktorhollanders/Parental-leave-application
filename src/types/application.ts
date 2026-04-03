import { Applicant } from "./applicant";
import { Documents } from "./documents";
import { Employment } from "./employment";
import { Leave } from "./leave";
import { Partner } from "./partner";
import { Payment } from "./payment";

export type Application = {
  applicant: Applicant;
  employment: Employment;
  partner?: Partner;
  leave: Leave;
  payment: Payment;
  documents?: Documents;
};
