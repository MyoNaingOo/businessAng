import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleProComponent } from '../sale-pro/sale-pro.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SaleProComponent,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  salePro: any
  xmark:any = faXmark




  products: any [] = [

    {
      id: 1,
      name: "name1",
      description: "description1",
      price: 1200
    },
    {
      id: 2,
      name: "name2",
      description: "description2",
      price: 2400
    },
    {
      id: 3,
      name: "name3",
      description: "description3",
      price: 3600
    },
    {
      id: 4,
      name: "name4",
      description: "description4",
      price: 4200
    },
    {
      id: 5,
      name: "name5",
      description: "description5",
      price: 5400
    },
    {
      id: 6,
      name: "name6",
      description: "description6",
      price: 6600
    },
    {
      id: 7,
      name: "name7",
      description: "description7",
      price: 7200
    },
    {
      id: 8,
      name: "name8",
      description: "description8",
      price: 8400
    },
    {
      id: 9,
      name: "name9",
      description: "description9",
      price: 9600
    }

  ]
  showPro: any;

  showProductId(id:number){

    let showcard = document.getElementById("showProCard")
    this.showPro =  this.products.filter( pro => pro.id == id);
    showcard?.classList.remove("hidden")

    console.log(this.showPro);


  }

  closeshow() {
    let showcard = document.getElementById("showProCard")
    showcard?.classList.add("hidden")

    this.showPro = null


  }



}
