import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FrontendComponent } from './frontend.component';
import { FooterComponent } from './footer/footer.component';
import { FrontLandingComponent } from './front-landing/front-landing.component';
import { FrontendRoutingModule } from './frontend-routing.module';


@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
    FrontLandingComponent
   
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
