import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOrderComponent } from './form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FormOrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    FormOrderComponent
  ]
})
export class ComponentsModule { }
