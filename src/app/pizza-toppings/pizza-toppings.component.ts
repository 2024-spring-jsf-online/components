import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

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

  //angular method called when component is created and is ready to init
  ngOnInit(): void{
    //calls pizzaSvc that was injected (DI) in constructor (line 15)
    //calls function within pizza service ts
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud;
    console.log(pt);
  }

}
