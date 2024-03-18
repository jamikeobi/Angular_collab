import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'John', 'James', 'Peter', 'Jamike'];

  searchText: string = '';
  setSearchText(value: string){
    this.searchText = value;
  }
}
