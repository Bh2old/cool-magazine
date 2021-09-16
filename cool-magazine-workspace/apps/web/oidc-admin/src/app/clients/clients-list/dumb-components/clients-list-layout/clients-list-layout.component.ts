import { catchError, tap } from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list-layout.component.html',
  styleUrls: ['./clients-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListLayoutComponent implements OnInit {
  @HostBinding('class')
  get hostClass() {
    return 'clients-list-layout';
  }

  searchForm = this._fb.group({
    id: ['xui'],
    name: ['pizda'],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      console.log(data);
    });

    this.searchForm.valueChanges.pipe(tap((v) => console.log({v, f:this.searchForm}))).subscribe();
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
