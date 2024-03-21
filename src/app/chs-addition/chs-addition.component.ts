import { Component } from '@angular/core';

@Component({
  selector: 'app-chs-addition',
  templateUrl: './chs-addition.component.html',
  styleUrls: ['./chs-addition.component.css']
})
export class ChsAdditionComponent {
  crusts = [
    { name: 'Classic Thin Crust', value: 'classic-thin', disabled: false, selected: false },
    { name: 'Hand-Tossed (+$1.00)', value: 'hand-tossed', disabled: false, selected: false },
    { name: 'Stuffed Crust (+$1.50)', value: 'stuffed-crust', disabled: false, selected: false },
    { name: 'Chicago Deep Dish (+$2.00)', value: 'chicago-deep-dish', disabled: false, selected: false },
    { name: 'Gluten-Free Crust (+$2.00)', value: 'gluten-free', disabled: false, selected: false },
    { name: 'Surprise Me', value: 'surprise', disabled: false, selected: false }
  ];
  
}
