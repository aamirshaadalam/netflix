class BadRequestError extends Error {
  public statusCode: number;
  public details: Array<string>;

  constructor(message: string, details?: Array<string>) {
    super(message);
    this.statusCode = 400;
    this.details = details || [];
    this.name = 'BadRequestError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export default BadRequestError;
