class ConfigurationError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
    this.statusCode = 500;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConfigurationError);
    }
  }
}

export default ConfigurationError;
