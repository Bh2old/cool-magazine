export interface ICloneable<TImplementer extends ICloneable<TImplementer>> {
  clone(): TImplementer;
}
