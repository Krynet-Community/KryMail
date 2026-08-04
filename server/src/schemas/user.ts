import { z } from "zod";

export const usernameSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3)
    .max(32)
    .regex(/^[a-zA-Z0-9_]+$/)
});

export const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3)
    .max(32),

  password: z
    .string()
    .min(12)
    .max(128)
});

export type RegisterInput =
  z.infer<typeof registerSchema>;
