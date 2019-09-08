import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { CommonComponent } from './common/common.component';

import { AdminHeaderComponent } from './common/admin-header/admin-header.component';


@NgModule({
  declarations: [CommonComponent, AdminHeaderComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
