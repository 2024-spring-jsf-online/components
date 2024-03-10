import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaSizeDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrl: './pizza-size.component.css'
})
export class PizzaSizeComponent {
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availablePizzaSizes: PizzaSizeDisplay[] = [];

  ngOnInit(): void {

    const ps = this.pizzaSvc.getPizzaSize();
    console.log(ps);

    this.availablePizzaSizes = ps.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaSizes);
  }






} //CODE IS CLOSED BEYOND THIS POINT
