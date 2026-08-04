import { FastifyPluginAsync } from "fastify";

const healthRoute: FastifyPluginAsync = async (app) => {

  app.get("/health", async () => {
    return {
      status: "ok",
      uptime: process.uptime()
    };
  });

};

export default healthRoute;
