import { z } from 'zod';
import { config } from 'dotenv';

const node = process.env.NODE_ENV || 'production';
const result = config({ path: `./.env.${node}` });
if (result.error) throw new Error('Could not find .env file');

const schema = z.object({
  PORT: z.union([z.string(), z.number()]),
  CORS_ORIGIN: z.string().default('*'),
  CORS_ORIGIN_METHODS: z.string().default('GET,POST,PATCH,PUT,DELETE'),
  DB_HOST: z.string().ip().default('127.0.0.1'),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string().transform((val) => parseFloat(val)),
});

const { error, data } = schema.safeParse(result.parsed);
if (error) throw new Error(`Config validation error: ${error.message.toString()}`);

type SchemaType = z.infer<typeof schema>;
export default function configEnv<T extends keyof SchemaType>(key: T): SchemaType[T] {
  if (!data) throw new Error(`Could not find ${key} in .env file`);
  return data[key];
}
