import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-header-layout',
  templateUrl: './main-header-layout.component.html',
  styleUrls: ['./main-header-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderLayoutComponent {}
