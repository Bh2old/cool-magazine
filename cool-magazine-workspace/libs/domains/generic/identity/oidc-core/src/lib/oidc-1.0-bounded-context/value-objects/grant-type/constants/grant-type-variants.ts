const VARIANTS = {
  authorizationCode: true,
  implicit: true,
  refreshToken: true,
} as const;

type Variants = keyof typeof VARIANTS;

export const GRANT_TYPE_VARIANTS = [
  ...Object.keys(VARIANTS),
] as readonly Variants[];
