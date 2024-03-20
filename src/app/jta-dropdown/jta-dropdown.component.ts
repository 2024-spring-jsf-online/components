import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Word {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jta-dropdown',
  templateUrl: './jta-dropdown.component.html',
  styleUrl: './jta-dropdown.component.css'
})
export class JtaDropdownComponent {
  selectFormControl = new FormControl ('', Validators.required);
  
  selectedWord: string = '';

  words: Word[] = [
    {value: 'foo', viewValue: 'Foo'},
    {value: 'bar', viewValue: 'Bar'},
    {value: 'baz', viewValue: 'Baz'}
  ];
}
