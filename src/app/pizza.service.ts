import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    //pretend we make a service call here

    const getPizzaToppingsFromWebService = [
      {
        name: 'olives'
        , price: 2.25
      }
      ,{
        name: 'pepperoni'
        , price: 1.50
      }
      , {
        name: 'sausage'
        , price: 1.75
      }
    ]

    return getPizzaToppingsFromWebService; 
  }
}
