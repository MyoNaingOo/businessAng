import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  OnChanges {

  title: any;

  Moon:any = faMoon;
  Sun:any = faSun;
  darkicon:any = faMoon

  navbers = [
    {
      title: "HOME",
      path: ""
    },
    {
      title: "SALE LIST",
      path: "sales"
    }, {
      title: "STORE LIST",
      path: "stores"
    },
  ]



  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      if (localStorage.getItem("theme") == 'dark') {
        localStorage.setItem("theme", "dark")
        this.darkicon=this.Sun
        document.documentElement.classList.add('dark')
      } else {
        localStorage.setItem("theme", "light")
        this.darkicon=this.Moon
        document.documentElement.classList.remove('dark')
      }
    }
  }


  ngOnChanges(): void {
    initFlowbite()
  }


  dark() {
    if (localStorage.getItem("theme") != 'dark') {
      localStorage.setItem("theme", "dark")
      this.darkicon=this.Sun
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem("theme", "light")
      this.darkicon=this.Moon
      document.documentElement.classList.remove('dark')
    }
  }

}
