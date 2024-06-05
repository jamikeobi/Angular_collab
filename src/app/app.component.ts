import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'main-project';
  User = {
    firstName : 'Jamike',
    lastName : 'Obikwelu AKA Odogwu',
    age: 18,
    email: 'jamikeobikwelu@gmail.com'
  }
}
