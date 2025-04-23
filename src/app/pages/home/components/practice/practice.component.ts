import { Component,signal,computed } from '@angular/core';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})

export class PracticeComponent {
  isTheUserLoggedIn = false;
  login(){
    this.isTheUserLoggedIn=true;
  }
  logout(){
    this.isTheUserLoggedIn=false;
  }
}
