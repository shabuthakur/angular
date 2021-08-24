import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: any = FormGroup;

  add: number = 0;
  grade: any;

  constructor(public fb: FormBuilder) {
    this.myform = this.fb.group({
      sub1: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      sub2: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      sub3: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      sub4: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      sub5: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
    });
  }

  onSubmit(myform: any) {
    console.log(myform.value);
  }

  avg() {
    this.add =
      (this.myform.value.sub1 +
        this.myform.value.sub2 +
        this.myform.value.sub3 +
        this.myform.value.sub4 +
        this.myform.value.sub5) /
      5;

    
  }

  ngOnInit(): void {}
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
