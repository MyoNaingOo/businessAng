import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {

  id?: string;
  gmail?:string;
  address?:string
  name?:string;
  password?:string;
  role?:string;
  user_img?:string;
}
