import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components';

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  exports: [CommonModule, SharedComponentsModule],
})
export class SharedModule {}
