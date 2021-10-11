/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';

async function root(fastify: FastifyInstance, opts: FastifyServerOptions): Promise<void> {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: 'prueba' };
  });
}

export default root;
