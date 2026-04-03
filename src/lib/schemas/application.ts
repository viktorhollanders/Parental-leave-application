import { z } from "zod";
import { applicantSchema } from "./applicant";
import { employmentSchema } from "./employment";
import { partnerSchema } from "./partner";
import { leaveSchema } from "./leave";
import { paymentSchema } from "./payment";
import { documentsSchema } from "./documents";

export const applicationSchema = z.object({
  applicant: applicantSchema,
  employment: employmentSchema,
  partner: partnerSchema.optional(),
  leave: leaveSchema,
  payment: paymentSchema,
  documents: documentsSchema.optional(),
});

export type Application = z.infer<typeof applicationSchema>;
