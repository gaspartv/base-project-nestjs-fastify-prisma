export const OK = 200
export const CREATED = 201
export const NO_CONTENT = 204
export const BAD_REQUEST = 400
export const UNAUTHORIZED = 401
export const NOT_FOUND = 404
export const CONFLICT = 409
export const TEAPOT = 418
export const TOO_MANY_REQUESTS = 429
export const INTERNAL_SERVER_ERROR = 500

const HttpStatus = {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  UNAUTHORIZED,
  NOT_FOUND,
  CONFLICT,
  TEAPOT,
  TOO_MANY_REQUESTS,
  INTERNAL_SERVER_ERROR,
} as const

export default HttpStatus
