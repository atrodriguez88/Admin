import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  constructor(private router: Router) { }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || ''; // en caso de devolverme undefine retorno ''
  }

  logIn(form: NgForm) {

    if (form.value.remember === true) {
      localStorage.setItem('email', form.value.email);
    }

    console.log(form.valid);
    console.log(form.value);

    this.router.navigate(['/dashboard']);
  }

}
