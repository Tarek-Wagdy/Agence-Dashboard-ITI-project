import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrandComponent } from './Components/brand/brand.component';
import { ModelComponent } from './Components/model/model.component';
import { ReportComponent } from './Components/report/report.component';
import { PendingCarsComponent } from './Components/pending-cars/pending-cars.component';
import { UsersComponent } from './Components/users/users.component';
import { DisplaycarimagesComponent } from './Components/displaycarimages/displaycarimages.component';
import { SellComponent } from './sell/sell.component';
// import { SellComponent } from './sell/sell.component';



const routes: Routes = [
  { path:"login-page",component:LoginPageComponent},
  {path:"register",component:RegisterComponent},
  { path: "brand", component: BrandComponent },
  { path: "model", component: ModelComponent },
  { path: "report", component: ReportComponent },
  { path: "pending-cars", component: PendingCarsComponent },
  { path: "users", component: UsersComponent },
  { path: "displaycarimages/:id", component: DisplaycarimagesComponent },
  {path:"addcar", component:SellComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
