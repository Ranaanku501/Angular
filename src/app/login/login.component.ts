import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;

  name = '';
  constructor( private formBuilder: FormBuilder, private route: Router ) { 
    this.form = this.formBuilder.group({
      email_or_phone: ['', Validators.compose([Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', Validators.required]
  });
  }


  ngOnInit() {
    // this.form.patchValue({
    //   email_or_phone:'45645465',
    //   password:'46546554645'
    // })  
  }

  loginFun() {
    if (this.form.valid && this.form.value.email_or_phone == "abc@gmail.com") {
      localStorage.setItem("email_or_phone", this.form.value.email_or_phone);
      this.route.navigate(['/admin']);
        console.log(this.form.value);
    } else {
      console.log("error")
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched({onlySelf: true});
        });
    }
}

}
