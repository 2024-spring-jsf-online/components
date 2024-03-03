import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbrummel-addition',
  templateUrl: './pbrummel-addition.component.html',
  styleUrl: './pbrummel-addition.component.css'
})
export class PbrummelAdditionComponent implements OnInit {
  pizzaMenu = [
    { name: 'Margherita', price: 9.99, description: 'Classic tomato and mozzarella' },
    { name: 'Pepperoni', price: 12.99, description: 'Pepperoni, tomato, and mozzarella' },
    { name: 'Vegetarian', price: 11.99, description: 'Assorted vegetables and mozzarella' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
