import { IEnvironmentStorage } from '../abstractions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBrowserLocalStorageService
  extends IEnvironmentStorage<string, string> {}
