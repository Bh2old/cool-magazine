import { ICloneable } from '@bh2old/ddd-expc/abstractions';

export function getCollectionClonedItems<TItem extends ICloneable<TItem>>(
  collection: TItem[]
) {
  return collection.map((item: TItem) => item.clone());
}
