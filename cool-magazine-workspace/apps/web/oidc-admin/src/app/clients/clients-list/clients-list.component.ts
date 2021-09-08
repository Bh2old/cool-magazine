import { catchError } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent {
  @HostBinding('class')
  get hostClass() {
    return 'clients-list-layout';
  }

  constructor(private http: HttpClient) {
    console.log(http, 'http');
  }

  test1() {
    this.http
      .get('http://localhost:4200/bff/app/test1')
      .subscribe((e) => console.log(e, 'e1'));
  }

  test2() {
    this.http
      .get('http://localhost:4200/bff/app/test2')
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((e) => console.log(e, 'e2'));
  }
}
