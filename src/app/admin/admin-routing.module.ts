
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    data: { addDynamicChild: true },    
    children: [
      {
        path: "dashboard",  
        pathMatch: "full",      
        loadChildren: () =>
        import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "forms",        
        loadChildren: () =>
        import("./forms/forms.module").then((m) => m.FormsModule),
      },           
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }