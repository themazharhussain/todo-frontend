import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  handleSubmit() {
    console.log("Form is submitted successfully")
  }
}
