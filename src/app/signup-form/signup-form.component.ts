import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.maxLength(12),
        UsernameValidators.cannotContainSpace,
      ],UsernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)
    })
  });
  get username(){
    return this.form.get('account.username');
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.form.setErrors({
      invalidLogin:true
    })
  }

}
