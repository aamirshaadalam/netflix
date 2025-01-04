class UnauthorizedError extends Error {
    public statusCode: number;
  
    constructor(message: string) {
      super(message);
      this.statusCode = 401;
      this.name = 'UnauthorizedError';
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UnauthorizedError);
      }
    }
  }
  
  export default UnauthorizedError;
  