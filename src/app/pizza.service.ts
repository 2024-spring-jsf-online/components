import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Pepperoni'
        , price: 1.50
      }
      , {
        name: 'Sausage'
        , price: 1.75
      }
    ];

    return toppingsFromWebService;
  }

  getPizzaSize() {
    const pizzaSize = [
      {
        name: "Large"
        , price: 18.00
      }
    ,{
        name: "Medium"
        , price: 16.00
      }
    ,{
      name: "Small"
      , price: 14.00
    }
  ,{
    name: "Individual"
    , price: 10.00
  }
    ];
    return pizzaSize;
  }
}
