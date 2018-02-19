import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import * as swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormsModule;

  constructor() {
  }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false)
    });
  }

  register() {
    console.log(this.form.value);
    if (!this.form.value.conditions) {
      swal("Oops!", "Something went wrong!", "error");
    }
  }

}
