const TYPES = {
  authorization_code: true,
  implicit: true,
  refresh_token: true,
} as const;

type Types = keyof typeof TYPES;

export const GRANT_TYPES = [...Object.keys(TYPES)] as readonly Types[];
