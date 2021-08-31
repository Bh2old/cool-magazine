import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INavigationComponentService } from './i-navigation-component-service';

@Injectable()
export class NavigationComponentService
  implements INavigationComponentService, OnDestroy
{
  private readonly _visibleState$ = new BehaviorSubject<boolean>(true);
  readonly isShow$ = this._visibleState$.asObservable();

  get isShow() {
    return this._visibleState$.getValue();
  }

  get isHidden() {
    return !this.isShow;
  }

  open(): void {
    this._visibleState$.next(true);
  }

  close(): void {
    this._visibleState$.next(false);
  }

  toggle(): void {
    this._visibleState$.next(!this.isShow);
  }

  ngOnDestroy(): void {
    this._visibleState$.complete;
  }
}
