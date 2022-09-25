import {FormControl} from "@angular/forms";

export class MyValidators{

  static restrictedEmails(control: FormControl): { [key: string]: boolean } | null{
    if (['v@mail.ru'].includes(control.value)){
      return {
        'restrictedEmails' : true
      }
    }
    return null
  }

}
