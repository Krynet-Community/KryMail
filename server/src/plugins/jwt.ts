import fp from "fastify-plugin";
import jwt from "@fastify/jwt";
import type { FastifyPluginAsync } from "fastify";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      sub: string;
      username: string;
    };

    user: {
      sub: string;
      username: string;
    };
  }
}

const jwtPlugin: FastifyPluginAsync = async (fastify) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  await fastify.register(jwt, {
    secret,
    sign: {
      expiresIn: "15m",
      issuer: "krymail"
    }
  });

  fastify.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({
        error: "Unauthorized"
      });
    }
  });
};

export default fp(jwtPlugin);
