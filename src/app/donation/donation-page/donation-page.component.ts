import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DailylistserviceService } from 'src/services/dailylistservice.service';


@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.scss']
})
export class DonationPageComponent implements OnInit {
  inValid: boolean=false;

  constructor(private dailylistservice : DailylistserviceService, private router: Router,private fb: FormBuilder) { }
  DonationForm: FormGroup | any;
  submitted : boolean = false;

  
  ngOnInit(): void {

    this.DonationForm = this.fb.group({
      fname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      postalCode: new FormControl('',[Validators.required]),
      donateamount: new FormControl('',[Validators.required]),
      creditCard : new FormControl('',[Validators.required])
   })
   
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.DonationForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.DonationForm.value);
    }
  }

  get registerFormControl() {
    return this.DonationForm.controls;
  }

}



