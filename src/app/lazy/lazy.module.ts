import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent }
    ]),
    // Comment this out, save 200k
    MdInputModule,
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
