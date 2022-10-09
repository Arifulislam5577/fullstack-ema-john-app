export const error = (message = "Internal Server Error", statusCode = 500) => {
  const error = new Error(message);
  error.status = statusCode;
  return error;
};
