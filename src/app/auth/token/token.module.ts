import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../../user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TokenModule {

  user !: UserModule

 }
