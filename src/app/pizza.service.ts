import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getPizzaToppingsFromTheCloud() {
    // we will call web service here 

    const toppingsFromWebService = [

      {
        name: 'olives'
        ,price:2.25
      }
      ,
      {
        name: 'tomato'
        ,price:2.00
      }
    ];

    return toppingsFromWebService;
  }
}
