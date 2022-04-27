import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrderRoutingModule } from './order-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
    ComponentsModule
   
  ]
})
export class OrderModule { }
