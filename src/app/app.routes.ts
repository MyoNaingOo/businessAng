import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { StoresComponent } from './stores/stores.component';
import { SaleProComponent } from './sale-pro/sale-pro.component';
import { LoginComponent } from './auth/login/login.component';
import { OtpComponent } from './auth/otp/otp.component';

export const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"otp/:type",component:OtpComponent},
  {path:"sales",component:SalesComponent},
  {path:"stores",component:StoresComponent},
  {path:"sale",component:SaleProComponent}

];
