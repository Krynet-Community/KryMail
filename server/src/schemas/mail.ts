import { z } from "zod";

export const sendMailSchema = z.object({
  recipient: z
    .string()
    .trim()
    .min(3)
    .max(64),

  subject: z
    .string()
    .trim()
    .max(255)
    .default(""),

  ciphertext: z
    .string()
    .min(1),

  nonce: z
    .string()
    .min(1),

  ephemeralPublicKey: z
    .string()
    .min(1),

  signature: z
    .string()
    .min(1),

  attachments: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string().max(255),
      size: z.number().int().nonnegative()
    })
  ).default([])
});

export type SendMailInput = z.infer<typeof sendMailSchema>;
