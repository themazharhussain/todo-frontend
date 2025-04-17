import { Component } from '@angular/core';
import { PracticeComponent } from './components/practice/practice.component';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { PropsComponent } from './components/props/props.component';
import { ParentReceiverComponent } from './components/parent-receiver/parent-receiver.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    PracticeComponent,
    ConditionalComponent,
    PropsComponent,
    ParentReceiverComponent,
  ],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {}
