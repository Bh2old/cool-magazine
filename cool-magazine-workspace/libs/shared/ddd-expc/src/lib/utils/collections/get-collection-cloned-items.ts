import { ICloneable } from "../../abstractions/interfaces";

export function getCollectionClonedItems<TItem extends ICloneable<TItem>>(collection: TItem[]) {
  return collection.map((item: TItem) => item.clone());
}
