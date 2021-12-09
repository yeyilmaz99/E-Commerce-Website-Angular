import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit   {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourtFormGroup:FormGroup
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      addressTitle: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      street: ['', Validators.required],
      apartment: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      services: ['',Validators.requiredTrue],
      terms: ['',Validators.requiredTrue],
      privacy: ['',Validators.requiredTrue],
    });
    this.fourtFormGroup = this._formBuilder.group({
    });

  }
}