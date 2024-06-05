import { Component, Input, EventEmitter, Output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  onselectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }
}
