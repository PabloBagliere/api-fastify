import { build } from './app';

const server = build({
  logger: true,
});

server.listen(3000, (err, address) => {
  console.log('hola');
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
