import { Component } from '@angular/core';

@Component({
  selector: 'app-caj-number',
  templateUrl: './caj-number.component.html',
  styleUrl: './caj-number.component.css'
})
export class CajNumberComponent {

  numberOne = 10;
  numberTwo = 90;
  total = 1/9;
  
  divide = () => this.total = this.numberOne / this.numberTwo;

  color = "";

  favColor = () => this.color;

}
