import Fastify from "fastify";

import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import sensible from "@fastify/sensible";
import cookie from "@fastify/cookie";
import jwt from "@fastify/jwt";
import rateLimit from "@fastify/rate-limit";

import dotenv from "dotenv";

dotenv.config();

const app = Fastify({
    logger: true
});

await app.register(cors, {
    origin: true,
    credentials: true
});

await app.register(helmet);

await app.register(cookie);

await app.register(sensible);

await app.register(jwt, {
    secret: process.env.JWT_SECRET!
});

await app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute"
});

app.get("/health", async () => {

    return {
        status: "ok"
    };

});

const PORT = Number(process.env.PORT) || 3000;

await app.listen({
    port: PORT,
    host: "0.0.0.0"
});
