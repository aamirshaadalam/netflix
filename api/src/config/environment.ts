import Joi from 'joi';
import dotenv from 'dotenv';
import { ConfigurationError } from '../core/errors';

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  DB_URI: Joi.string().required(),
  CRYPTO_PRIVATE_KEY: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new ConfigurationError(error.message);
}

const { PORT, DB_URI, CRYPTO_PRIVATE_KEY, JWT_SECRET_KEY } = envVars;

export default {
  port: PORT,
  dbUri: DB_URI,
  cryptoPrivateKey: CRYPTO_PRIVATE_KEY,
  jwtSecretKey: JWT_SECRET_KEY,
};
