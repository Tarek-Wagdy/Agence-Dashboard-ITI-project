import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrandComponent } from './Components/brand/brand.component';
import { ModelComponent } from './Components/model/model.component';
import { AddbrandComponent } from './Components/addbrand/addbrand.component';
import { AddmodelComponent } from './Components/addmodel/addmodel.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { ReportComponent } from './Components/report/report.component';
import { AuthInterceptor } from './Helpers/auth.interceptor';
import { PendingCarsComponent } from './Components/pending-cars/pending-cars.component';
import { UsersComponent } from './Components/users/users.component';
import { DisplaycarimagesComponent } from './Components/displaycarimages/displaycarimages.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarImageComponent } from './car-image/car-image.component';
import { TopCardComponent } from './top-card/top-card.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    LoginPageComponent,
    RegisterComponent,
    BrandComponent,
    ModelComponent,

    
    AddbrandComponent,
    AddmodelComponent,
    ReportComponent,
    PendingCarsComponent,
    UsersComponent,
    DisplaycarimagesComponent,
    CarDetailsComponent,
    CarImageComponent,
    TopCardComponent,
    SellComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule ,
    ValidateEqualModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
