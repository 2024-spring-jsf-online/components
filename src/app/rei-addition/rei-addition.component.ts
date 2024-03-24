import { Component } from '@angular/core';

@Component({
  selector: 'app-rei-addition',
  templateUrl: './rei-addition.component.html',
  styleUrl: './rei-addition.component.css'
})
export class ReiAdditionComponent {

  absentGratuity = 25;

  totalPlusGrat = 30;

  fifteenGrat = () => this.totalPlusGrat = (this.absentGratuity * .15) + this.absentGratuity;
  eighteenGrat = () => this.totalPlusGrat = (this.absentGratuity * .18) + this.absentGratuity;
  twentyGrat = () => this.totalPlusGrat = (this.absentGratuity * .2) + this.absentGratuity;
  twentyFiveGrat = () => this.totalPlusGrat = (this.absentGratuity * .25) + this.absentGratuity;
  
}
