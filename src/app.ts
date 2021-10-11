import { IncomingMessage, Server, ServerResponse } from 'http';
import { join } from 'path';

import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import autoLoad from 'fastify-autoload';

function build(
  opts: FastifyServerOptions = {},
): FastifyInstance<Server, IncomingMessage, ServerResponse> {
  const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(opts);
  // app.register(autoLoad, {
  //   dir: join(__dirname, 'plugins'),
  //   ignorePattern: /.*(test|spec).ts/,
  //   options: Object.assign({}, opts),
  // });

  app.register(autoLoad, {
    dir: join(__dirname, 'routes'),
    ignorePattern: /.*(test|spec).ts/,
    options: Object.assign({}, opts),
  });
  return app;
}

export { build };
