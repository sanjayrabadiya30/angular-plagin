import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from './about-us.component';


const routes: Routes = [
  {
    path: "",
    component: AboutUsComponent,
    
  },
];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutUsModule { }
