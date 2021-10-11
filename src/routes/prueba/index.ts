/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';

async function prueba(fastify: FastifyInstance, opts: FastifyServerOptions): Promise<void> {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: 'hola' };
  });
}

export default prueba;
