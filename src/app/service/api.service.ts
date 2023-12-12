import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtpModule } from '../auth/otp/otp.module';
import { UserModule } from '../user/user.module';
import { TokenModule } from '../auth/token/token.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  api: String = "http://localhost:8080/api/"


  constructor(private http:HttpClient ) { }

  // user api

  public updateuser(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/update",user,{headers});

  }

  public changeImage(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<any>(this.api+"user/image",user,{
      headers: headers ,
      observe: 'response',});

  }

  public changePass(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changePass",user,{
      headers: headers ,
      observe: 'response',});

  }

  public changeName(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changeName",user,{
      headers: headers ,
      observe: 'response',});

  }

  public changeAddress(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changeAddress",user,{
      headers: headers ,
      observe: 'response',});

  }


  public profile(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/user",{headers});

  }

  public regotp(f:any){
    return this.http.post<OtpModule>(this.api+"otp/register",f)
  }

  public loginotp(f:any){
    return this.http.post<OtpModule>(this.api+"otp/authenticate",f)
  }



  public login(loginuser: any) {
    return this.http.post<TokenModule>(this.api+"auth/authenticate",loginuser);
  }

  public register(user : JSON){
   return this.http.post<TokenModule>(this.api+"auth/register",user)
  }

  public logout(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"logout",{headers});
  }

  public getusers(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/users",{headers});
  }

  public getuser(id: any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/userid/"+id,{headers});
  }


















}
