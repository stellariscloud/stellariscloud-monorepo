/* eslint-disable @typescript-eslint/prefer-literal-enum-member */
/**
 * Auth token and key durations in _seconds_.
 */
export const enum AuthDurationSeconds {
  ApiKeyDefault = 365 * 24 * 60 * 60,
  SessionAbsolute = 30 * 24 * 60 * 60,
  SessionSliding = 15 * 24 * 60 * 60,
  EmailVerification = 24 * 60 * 60,
  PasswordChange = 60 * 60,
}

/**
 * Auth token and key durations in _milliseconds_.
 */
export const enum AuthDurationMilliseconds {
  ApiKeyDefault = AuthDurationSeconds.ApiKeyDefault * 1000,
  SessionAbsolute = AuthDurationSeconds.SessionAbsolute * 1000,
  SessionSliding = AuthDurationSeconds.SessionSliding * 1000,
  EmailVerification = AuthDurationSeconds.EmailVerification * 1000,
  PasswordChange = AuthDurationSeconds.PasswordChange * 1000,
}
/* eslint-enable @typescript-eslint/prefer-literal-enum-member */
