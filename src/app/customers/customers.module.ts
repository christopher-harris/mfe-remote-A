import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import {RouterModule} from '@angular/router';
import {CUSTOMER_ROUTES} from './customer.routes';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMER_ROUTES)
  ]
})
export class CustomersModule { }
