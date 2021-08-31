import { Observable } from 'rxjs';

export interface INavigationComponentService {
  readonly isShow$: Observable<boolean>;
  readonly isShow: boolean;
  readonly isHidden: boolean;

  open(): void;
  close(): void;
  toggle(): void;
}
