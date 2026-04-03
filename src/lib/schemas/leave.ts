import { z } from "zod";

export const leaveSchema = z.object({
  dateFrom: z.date(),
  dateTo: z.date(),
  employmentRatio: z.union([
    z.literal(25),
    z.literal(50),
    z.literal(75),
    z.literal(100),
  ]),
});

export type Leave = z.infer<typeof leaveSchema>;
