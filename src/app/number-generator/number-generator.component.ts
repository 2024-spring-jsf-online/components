import { Component } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrl: './number-generator.component.css'
})
export class NumberGeneratorComponent {
  maxNumber: number = 101;
  myNum: number = 0;

  newNumber = () => {
    this.myNum = Math.floor(Math.random() * this.maxNumber);
  }
}
