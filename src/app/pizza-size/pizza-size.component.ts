import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';



interface PizzaSizesDisplay{
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrl: './pizza-size.component.css'
})
export class PizzaSizeComponent implements OnInit {

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availableSizes: PizzaSizesDisplay[] = [];


  ngOnInit(): void{

    const ps = this.pizzaSvc.getPizzaSizesFromCloud();
    console.log(ps);

    this.availableSizes = ps.map(
      x => ({
        ...x
        , checked: false

      })
    );
    console.log(this.availableSizes);

   }

}
