import { NgModule } from '@angular/core';
import {
  LoginAppRoute,
  AuthAppRouting,
  LoginSuccessAppRoute,
} from '../../core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { LoginSuccessComponent } from './login-success';

const ROUTES: Routes = new AuthAppRouting({
  login: new LoginAppRoute(LoginComponent),
  loginSuccess: new LoginSuccessAppRoute(LoginSuccessComponent),
}).getRoutes();

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
