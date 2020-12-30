import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { FrontLandingComponent } from './frontend/front-landing/front-landing.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminLandingComponent,
    pathMatch: "prefix",
    children: [ 
      { 
        path: "", 
        redirectTo: "login", 
        pathMatch: "full" 
      },     
      {
        path: "",
        loadChildren: () =>
          import("./admin/admin.module").then((b) => b.AdminModule),
      },  
      {
        path: "login",
        pathMatch: "full",
        loadChildren: () =>
          import("./admin/login/login.module").then((m) => m.LoginModule),
      },    
    ],
  },
  {
    path: "",
    component: FrontLandingComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./frontend/frontend.module").then((b) => b.FrontendModule),
        data: { addDynamicChild: true },
      },      
    ],
  }  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }