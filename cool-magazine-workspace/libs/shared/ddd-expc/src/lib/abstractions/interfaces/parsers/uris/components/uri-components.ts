export interface ISchemeUriComponent {
  readonly scheme: string | undefined;
}
export interface IAuthorityUriComponent {
  readonly authority: string | undefined;
}
export interface IPathUriComponent {
  readonly path: string;
}
export interface IQueryUriComponent {
  readonly query: string | undefined;
}
export interface IFragmentUriComponent {
  readonly fragment: string | undefined;
}
