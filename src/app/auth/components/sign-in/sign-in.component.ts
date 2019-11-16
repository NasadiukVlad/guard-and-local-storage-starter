import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  public onSignIn() {
    const {username, password} = this.signInForm.value;
  }

  public onSubmit() {
    console.log(this.signInForm);
  }

  private buildForm() {
    this.signInForm = this.formBuilder.group(
      {
        username: [''],
        password: ['']
      });
  }

}
