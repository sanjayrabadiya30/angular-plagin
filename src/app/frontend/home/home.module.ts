import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OwlModule } from 'ngx-owl-carousel';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [    
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SlickCarouselModule,
    OwlModule
  ]  
})
export class HomeModule { }
