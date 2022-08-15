import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    email : new FormControl(""),
    mobile : new FormControl(""),
    gender : new FormControl(""),
    password : new FormControl(""),
    rpassword : new FormControl(""),
  });

  registerSubmited(){
    console.log(this.registerForm.value);
  }
}
