import { Static, Type } from '@sinclair/typebox';

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
});

type UserType = Static<typeof User>;

export { UserType };
