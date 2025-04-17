import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent {
  favouriteFramework=""

  showValue(){
    alert(this.favouriteFramework)
  }
}
