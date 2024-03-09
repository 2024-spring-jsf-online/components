import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    //pretend there is a web service call, we'll learn it 
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

  getPizzaSizesFromCloud() {
    const pizzaSizes = [
      {
        name: 'Individual'
      , price: 10.00
      }
    , {
      name: 'Small'
    , price: 12.00
    }
    , {
      name: 'Medium'
    , price: 14.00
    } 
    , {
      name: 'Large'
    , price: 16.00
    } 
    ]
    return pizzaSizes;
  }

}
