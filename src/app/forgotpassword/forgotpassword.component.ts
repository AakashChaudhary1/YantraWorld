import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../modules/user/customer.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  InsertForm: FormGroup = new FormGroup({
    Mobile: new FormControl(''),
  });

  newpasswordform: FormGroup = new FormGroup({
    NewPassword: new FormControl(''),
    ConfirmedPassword: new FormControl('')
  })



  submitted: boolean;
  submittedpassword: boolean;
  isRequested: any = false


  constructor(private formBuilder: FormBuilder, private customerservice: CustomerService, private route: Router, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.InsertForm = this.formBuilder.group({
      Mobile: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.newpasswordform = this.formBuilder.group({
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmedPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
      {
        validator: this.ConfirmedValidator('NewPassword', 'ConfirmedPassword'),
      })


  }
  get f(): { [key: string]: AbstractControl } {
    return this.InsertForm.controls;
  }

  get Pf(): { [key: string]: AbstractControl } {
    return this.newpasswordform.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.InsertForm.invalid) {
      return;
    }
    this.customerservice.Next(this.InsertForm.value.Mobile).subscribe((result) => {

      console.log(result);
      if (result['status'] == 400) {
        this.isRequested = true
      }

    })
  }

  onsubmitpassword(): void {
    this.submittedpassword = true
    if (this.newpasswordform.invalid) {
      return;

    }
    console.log(this.newpasswordform.value);

  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
        // alert('password not matched')
        // this.toastr.success('password is not matched')
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

