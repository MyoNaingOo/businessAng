import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenModule } from '../token/token.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,FontAwesomeModule,HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[ApiService]
})
export class LoginComponent {

  signin: boolean = false
  showpass: boolean = false
  eye:any = faEye
  eye_slash:any = faEyeSlash
  token !:TokenModule;
  massage:any
  massagebg !:boolean


  constructor(private api:ApiService,private router:Router){

  }


  showpassbtn(){
    if(this.showpass){
      this.showpass=false
    }else{
      this.showpass= true
    }
  }

  login(f: NgForm) {
    this.api.login(f.value)
    .subscribe({
      next: (data) => {
        this.token = data;
        if (this.token.user?.gmail != undefined) {
          localStorage.setItem("gmail", this.token.user?.gmail)
        }
        this.router.navigate(['login-otp'])

      },
      error: (error) => {
        this.massage = "pleasse check"
        this.massagebg = false

      }

    });
  }

  register(f: NgForm){
    if (f.value.password === f.value.cpassword) {
      this.api.register(f.value).subscribe({
        next: data => {
          this.token = data;
          if (this.token.user?.gmail != undefined) {
            localStorage.setItem("gmail", this.token.user?.gmail)
          }
          this.router.navigate(['register-otp'])
          // sessionStorage.setItem('token', this.token.token);
        },
        error: (error) => {
          this.massage = "Register failed"
          this.massagebg = false
        }
      })
    } else {
      this.massage = "password not same"
    }
  }


  is_signin(sing:boolean){
    this.signin = sing
  }

  remove(){
    const container = document.getElementById('container');
    if(container != null)
    container.classList.remove("active");
  }

  add(){
    const container = document.getElementById('container');
    if(container != null)
    container.classList.add("active");
  }


}
