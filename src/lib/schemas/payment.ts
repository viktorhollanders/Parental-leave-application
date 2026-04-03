import { z } from "zod";

export const paymentSchema = z.object({
  bankNr: z.string().min(4, "Bank number is required"),
  ledger: z.string().min(2, "Ledger is required"),
  accountNr: z.string().min(6, "Account number is required"),
});

export type Payment = z.infer<typeof paymentSchema>;
