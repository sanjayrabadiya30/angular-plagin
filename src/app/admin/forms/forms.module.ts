import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
  },
];

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FormsModule { }
