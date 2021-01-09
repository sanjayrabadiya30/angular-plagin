import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [  
    AdminComponent,  
    AdminLandingComponent,
    AdminHeaderComponent,
    AdminSidebarComponent     
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
