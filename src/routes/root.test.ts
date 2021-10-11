import { build } from 'app';
import superTest from 'supertest';
test('basic', async () => {
  const app = build();
  await app.ready();

  const response = await superTest(app.server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');

  expect(response.body).toStrictEqual({ hello: 'prueba' });
});
