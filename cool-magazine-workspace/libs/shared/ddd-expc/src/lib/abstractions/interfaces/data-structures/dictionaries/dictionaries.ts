import {
  IDictionaryItemAddable,
  IDictionaryKeysCheckable,
  IDictionaryKeyCheckable,
  IDictionaryItemReadable,
  IDictionaryEntriesReadable,
  IDictionaryValuesReadable,
} from './dictionary-methods';
import { IDictionarySizeReadable } from './dictionary-properties';

export interface IReadOnlyDictionary<TKey, TValue>
  extends IDictionarySizeReadable,
    IDictionaryKeyCheckable<TKey>,
    IDictionaryItemReadable<TKey, TValue>,
    IDictionaryEntriesReadable<TKey, TValue>,
    IDictionaryValuesReadable<TValue> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IWriteOnlyDictionary<TKey, TValue>
  extends IDictionaryItemAddable<TKey, TValue> {}

export interface IDictionary<TKey, TValue>
  extends IWriteOnlyDictionary<TKey, TValue>,
    IReadOnlyDictionary<TKey, TValue>,
    Iterable<[TKey, TValue]> {}

export interface IExtendedDictionary<TKey, TValue>
  extends IDictionary<TKey, TValue>,
    IDictionaryKeysCheckable<TKey> {}
