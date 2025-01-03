import Joi from 'joi';
import dotenv from 'dotenv';
import ConfigurationError from '../core/errors/configError';

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  DB_URI: Joi.string().required(),
  CRYPTO_PRIVATE_KEY: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new ConfigurationError(error.message);
}

export default {
  port: envVars.PORT,
  dbUri: envVars.DB_URI,
  cryptoPrivateKey: envVars.CRYPTO_PRIVATE_KEY,
};
