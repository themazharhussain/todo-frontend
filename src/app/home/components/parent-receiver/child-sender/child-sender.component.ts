import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-sender',
  imports: [],
  templateUrl: './child-sender.component.html',
  styleUrl: './child-sender.component.scss',
})
export class ChildSenderComponent {
  @Output() changeColor = new EventEmitter<string>();

  changeParentBg() {
    this.changeColor.emit('red');
  }
}
