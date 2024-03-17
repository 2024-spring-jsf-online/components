import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppings() {
    //not getting from cloud

    const toppingFrom = [
      {
        name: 'black olives'
        , price: 1.25
      }
      , {
        name: 'Pepperoni'
        , price: 1.75
      }
      , {
        name: 'onions'
        , price: .99
      }
    ];
    return toppingFrom;
  }
}
