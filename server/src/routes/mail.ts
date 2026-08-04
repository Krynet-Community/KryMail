// src/routes/mail.ts

import { FastifyPluginAsync } from "fastify";
import { z } from "zod";

const sendMailSchema = z.object({
  recipient: z.string().min(3).max(64),

  subject: z.string().max(512),

  ciphertext: z.string().min(1),

  nonce: z.string().min(1),

  signature: z.string().min(1),

  ephemeralPublicKey: z.string().min(1)
});

const mailRoutes: FastifyPluginAsync = async (app) => {
  app.post(
    "/mail/send",
    {
      preHandler: [app.authenticate]
    },
    async (request, reply) => {
      const body = sendMailSchema.parse(request.body);

      // Example only.
      // Replace this with your database lookup.
      const recipient = await app.db.user.findUnique({
        where: {
          username: body.recipient
        }
      });

      if (!recipient) {
        return reply.code(404).send({
          error: "Recipient not found"
        });
      }

      const message = await app.db.message.create({
        data: {
          senderId: request.user.sub,
          recipientId: recipient.id,

          subject: body.subject,

          ciphertext: body.ciphertext,

          nonce: body.nonce,

          signature: body.signature,

          ephemeralPublicKey: body.ephemeralPublicKey,

          createdAt: new Date()
        }
      });

      return reply.code(201).send({
        success: true,
        id: message.id
      });
    }
  );
};

export default mailRoutes;
