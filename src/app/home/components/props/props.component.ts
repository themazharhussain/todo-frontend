import { Component, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-props',
  imports: [ChildComponent],
  templateUrl: './props.component.html',
  styleUrl: './props.component.scss'
})
export class PropsComponent {
  someVegetables=[
  {
    name:"potato",
    color:"white"
  },
  {
    name:"tomato",
    color:"red"
  }
  ]
  
}
