import { z } from "zod";

export const employmentSchema = z.object({
  employmentStatus: z.enum(["employed", "Self-employed", "unemployed"]),
  employerName: z.string().min(1, "Employer name is required"),
  employmentRatio: z.number().optional(),
});

export type Employment = z.infer<typeof employmentSchema>;
