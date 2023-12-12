import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale-pro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale-pro.component.html',
  styleUrl: './sale-pro.component.scss'
})
export class SaleProComponent implements OnInit {

  @Input() product : any;


  constructor() {
    console.log(this.product);

  }

  ngOnInit(): void {
    console.log(this.product);

  }








}
