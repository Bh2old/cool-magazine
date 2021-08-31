import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponentModule } from './layout/layout-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [LayoutComponentModule, BrowserModule, BrowserAnimationsModule],
  exports: [LayoutComponentModule, BrowserModule, BrowserAnimationsModule],
})
export class CoreComponentsModule {}
