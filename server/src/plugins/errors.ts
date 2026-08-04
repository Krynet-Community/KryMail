import fp from "fastify-plugin";

export default fp(async (app) => {

  app.setErrorHandler(
    async (error, request, reply) => {

      request.log.error(error);

      return reply
        .code(500)
        .send({
          error: "Internal server error"
        });
    }
  );

});
