import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../modules/user/customer.service';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent implements OnInit {
  InsertForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  submitted: boolean;
  constructor(private formBuilder: FormBuilder, private customerservice:CustomerService, private route:Router) { }

  ngOnInit(): void {
    this.InsertForm = this.formBuilder.group({
        Mobile: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required]],
       
      });
  }

get f(): { [key: string]: AbstractControl } {
    return this.InsertForm.controls;
  }
 


  onSubmit(): void {
    this.submitted = true;


    if (this.InsertForm.invalid) {
      return;
    }
    this.customerservice.login( this.InsertForm.value.Mobile, this.InsertForm.value.password).subscribe((result)=>{
      console.log(result)
       if(result['status']==200){
       localStorage.setItem('token', window.btoa(JSON.stringify(result['data'])))
       this.route.navigate(['products'])


        
      }

    })
    //  console.log(this.InsertForm.value, this.InsertForm.value.Mobile, this.InsertForm.value.password);

  }



}
