import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'John', 'James', 'Peter', 'Jamike'];

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  searchText: string = '';
  setSearchText(value: string){
    this.searchText = value;
  }
}
