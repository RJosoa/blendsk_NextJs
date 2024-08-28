import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1,{ message: "Name is required" }),
  username: z.string().min(1,{ message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Invalid password" }),
});
