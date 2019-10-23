import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services';

import { UserInfo } from 'src/app/core/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public authForm: FormGroup;
  public isPasswordHidden = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }

  public hidePassword(event: Event) {
    event.preventDefault();
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.authForm.controls[controlName].hasError(errorName);
  }

  public checkFormValidation = (authFormValue: UserInfo) => {
    if (this.authForm.valid) {
      this.register(authFormValue);
    }
  }

  public async register(userInfo: UserInfo): Promise<void> {
    await this.authService.auth('signup', userInfo);
  }
}
