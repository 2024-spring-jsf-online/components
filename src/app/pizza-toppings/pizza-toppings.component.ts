import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

//define shape of data for view from component (view-model)
interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent {
  //Magic DI -- Dependency injection
  constructor(
    //annotated constructor parameter to be a PizzaService
    //Code completetion said "Probably trying to import PizzaService from typescript file (line 2)"
    //gives access to function written in pizza.service.ts (?)
    private pizzaSvc: PizzaService
    ) { }

    //property annotated to be pizza topping display array
    availablePizzaToppings: PizzaToppingDisplay[] = [];

  //angular method called when component is created and is ready to init
  ngOnInit(): void {
    //calls pizzaSvc that was injected (DI) in constructor (line 15)
    //calls function within pizza service ts
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    //data is coming from webService, but does not include checked
    //property. To create the shape that we want, we use map   
    this.availablePizzaToppings = pt.map(
      x => ({
        ...x,
        checked: false
      })
    );

    console.log(this.availablePizzaToppings);
  }
  
  //total price property initialized to 0
  totalPrice = 0;

  calculateTotal = () => {
    //when press calculate total
      //reassign totalPrice to this.availablePizzaToppings
    this.totalPrice = this.availablePizzaToppings
      //filter this.availbePizzaToppings by checked property
     .filter(x => x.checked)
     //reduce just checked properties by summing price
     .reduce((acc, x) => acc + x.price,
     0)
  }

  };
