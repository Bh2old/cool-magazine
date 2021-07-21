const TYPES = {
  'code id_token': true,
  code: true,
  id_token: true,
  none: true,
} as const;

type Types = keyof typeof TYPES;

export const RESPONSE_TYPES = [...Object.keys(TYPES)] as readonly Types[];
