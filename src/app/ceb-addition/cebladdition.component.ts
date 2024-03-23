import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaSizeDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-cebaddition',
  templateUrl: './cebaddition.component.html',
  styleUrl: './cebaddition.component.css'
})


export class CebAdditionComponent implements OnInit {
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availableSizes: PizzaSizeDisplay[] = [];

  ngOnInit(): void {

    const ps = this.pizzaSvc.getPizzaSize();
    console.log(ps);

    this.availableSizes = ps.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availableSizes);
  }






} //CODE IS CLOSED BEYOND THIS POINT
