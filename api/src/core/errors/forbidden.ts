class ForbiddenError extends Error {
    public statusCode: number;
  
    constructor(message: string) {
      super(message);
      this.statusCode = 403;
      this.name = 'ForbiddenError';
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ForbiddenError);
      }
    }
  }
  
  export default ForbiddenError;
  