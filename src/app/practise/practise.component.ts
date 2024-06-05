import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrl: './practise.component.css'
})
export class PractiseComponent {
  digit: number = 0;

  increment(){
    this.digit++;
  }

  decrement(){
    this.digit--
  }
  // isSeen: boolean = true;

  // toggleVisible(){
  //   this.isSeen = !this.isSeen;
  // }
  // isSeen: boolean = true;

  // toggle(){
  //   this.isSeen = !this.isSeen;
  // }
  // toggleBtn = document.getElementById("toggle");
  // par = document.getElementById("par");
  // // var isSeen = true;

  // toggle(){
  //   var par = document.getElementById('par');
  //   if(this.isSeen) {
  //     this.par
  //   } else{
      
  //   };
  // }
}
