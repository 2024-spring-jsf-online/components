import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbrummel-addition',
  templateUrl: './pbrummel-addition.component.html',
  styleUrl: './pbrummel-addition.component.css',
  styles: ['h1 { font-weight: normal; }']
})

export class PbrummelAdditionComponent implements OnInit {
  pizzaMenu = [
    { name: 'Margherita', price: 9.99, description: 'Classic tomato and mozzarella' },
    { name: 'Pepperoni', price: 12.99, description: 'Pepperoni, tomato, and mozzarella' },
    { name: 'Vegetarian', price: 11.99, description: 'Assorted vegetables and mozzarella' },
  ];

  selectedPizza: any;

  constructor() {}

  ngOnInit(): void {}

  selectPizza(pizza: any): void {
    this.selectedPizza = pizza;
  }

  placeOrder(): void {
    if (this.selectedPizza) {
      console.log('Placing order:', {
        pizza: this.selectedPizza.name,
        price: this.selectedPizza.price,
        description: this.selectedPizza.description,
      });
    } else {
      console.warn('Please select a pizza before placing an order.');
    }
  }
}
