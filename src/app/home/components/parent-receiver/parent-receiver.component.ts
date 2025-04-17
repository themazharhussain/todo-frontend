import { Component } from '@angular/core';
import { ChildSenderComponent } from './child-sender/child-sender.component';

@Component({
  selector: 'app-parent-receiver',
  imports: [ChildSenderComponent],
  templateUrl: './parent-receiver.component.html',
  styleUrls: ['./parent-receiver.component.scss'],
})
export class ParentReceiverComponent {

  parentBgColor: string = "";

  onChangeColor(color: string) {
    this.parentBgColor = color;
  }
}
