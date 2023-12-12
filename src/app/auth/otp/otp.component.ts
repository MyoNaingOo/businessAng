import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent implements OnInit  {


  gmail :any = "mno@gmail.com"
  type:any
  code !: number

  constructor(private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
   this.type = this.activatedRoute.snapshot.paramMap.get('type')
  }

  


  send(f:any){

    if(this.type == "login"){
      console.log("login");
      console.log(f.value)

    }else{
      console.log("reg");
      console.log(f.value);

    }

  }




}








