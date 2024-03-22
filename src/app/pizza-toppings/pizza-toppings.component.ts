import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI... Dependency injection...
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);
  }

  //for use with button
  // totalPrice = 0;

  //get accessor 
  //in liue of method and property
  //just property defined as get accessor 
  get totalPrice(){
    return this.availablePizzaToppings
      //only want to do something with the checked ones
      .filter(x => x.checked)
      //lambda with accumulator & x
      .reduce(
        (acc, x) => acc + x.price
        ,0
      )
      ;
  }

  //for use with "calculateTotal" button
  // calculateTotal = () => {
  //   this.totalPrice = this.availablePizzaToppings
  //     .filter(x => x.checked)
  //     .reduce(
  //       (acc, x) => acc + x.price
  //       , 0
  //     )
  //   ;
  // }
}
