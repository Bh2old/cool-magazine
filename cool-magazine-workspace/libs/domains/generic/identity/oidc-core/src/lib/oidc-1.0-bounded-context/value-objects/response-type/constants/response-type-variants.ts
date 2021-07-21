const VARIANTS = {
  codeIdToken: true,
  code: true,
  idToken: true,
  none: true,
} as const;

type Variants = keyof typeof VARIANTS;

export const RESPONSE_TYPE_VARIANTS = [
  ...Object.keys(VARIANTS),
] as readonly Variants[];
