// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// gender constants
export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

// blood type constants
export const BLOOD_TYPE = {
  A_BLOOD_TYPE: 'A',
  B_BLOOD_TYPE: 'B',
  AB_BLOOD_TYPE: 'AB',
  O_BLOOD_TYPE: 'O',
};

// 15 day
export const SESSION_DURATION = 15 * 24 * 60 * 60 * 1000;
export const ACCESS_TOKEN_DURATION = 15 * 60 * 1000; // 15 minutes

// default values
export const DEFAULT_VALUES = {
  PAGE: 1,
  PER_PAGE: 10,
  MAX_PER_PAGE: 100,
};
