import Joi from 'joi';
import dotenv from 'dotenv';
import { ConfigurationError } from '../core/errors';

dotenv.config();

const schema = Joi.object({
  PORT: Joi.number().required(),
  DB_URI: Joi.string().required(),
  CRYPTO_PRIVATE_KEY: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
}).unknown();

const { error, value } = schema.validate(process.env);

if (error) {
  throw new ConfigurationError(error.message);
}

export const { PORT: port, DB_URI: dbUri, CRYPTO_PRIVATE_KEY: cryptoPrivateKey, JWT_SECRET_KEY: jwtSecretKey } = value;
