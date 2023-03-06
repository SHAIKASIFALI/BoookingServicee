const StatusCodes = require("http-status-codes");

class RepositoryError extends Error {
  constructor(
    message = "something went wrong",
    explanation = "something went wrong",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.name = "RepositoryError";
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = RepositoryError;
