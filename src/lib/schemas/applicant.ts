import z from "zod";

export const applicantSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name cant be longer than 100 characters"),
  ssn: z
    .string()
    .min(10, "SSN cant be more than 10 digits")
    .max(10, "SSN cant be less than 10 digits"),
  phone: z
    .string()
    .min(10, "Phone number cant be more than 7 digits")
    .max(10, "Phone number cant be less than 7 digits"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  address: z.string().min(3, "Address is required"),
  city: z.string().min(3, "City is required"),
  state: z.string().min(2, "state is required"),
  zip: z.number().min(3, "Zip is required"),
  country: z.string().min(3, "Country is required"),
});

export type Applicant = z.infer<typeof applicantSchema>;
