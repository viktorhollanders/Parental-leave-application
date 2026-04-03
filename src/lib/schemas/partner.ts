import { z } from "zod";

export const partnerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  ssn: z.string().length(10, "SSN must be exactly 10 digits"),
  employmentStatus: z.enum(["employed", "Self-employed", "unemployed"]),
});

export type Partner = z.infer<typeof partnerSchema>;
