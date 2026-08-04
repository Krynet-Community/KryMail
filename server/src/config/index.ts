import { env } from "./env.js";

export const config = {

  server: {
    port: env.PORT
  },

  database: {
    url: env.DATABASE_URL
  },

  security: {
    jwtSecret: env.JWT_SECRET
  }

};
