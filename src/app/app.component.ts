import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  title: string = 'ngForm'


  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form)
    }
  }

  setCapital() {
    const capitals: any = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    const cityKey = this.form.get('adress')?.get('country')?.value
    const city = capitals[cityKey]
    this.form.patchValue({adress:{city}})
  }

get skill(){
    return this.form.get('skills') as FormArray
}
   addSkill() {
    const control = new FormControl('',Validators.required);
    this.skill.push(control)
  }

  console() {
    console.log(this.form.value)
  }
}
