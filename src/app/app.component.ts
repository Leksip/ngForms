import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      })
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
}
