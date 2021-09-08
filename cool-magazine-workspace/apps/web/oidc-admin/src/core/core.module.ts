import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponentsModule } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CORE_PROVIDERS } from './core.providers';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreComponentsModule,
  ],
  exports: [CoreComponentsModule],
  providers: [CORE_PROVIDERS],
})
export class CoreModule {}
