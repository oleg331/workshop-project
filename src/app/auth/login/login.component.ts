import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services';

import { UserInfo } from '../../core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  public isPasswordHidden = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
      this.login(authFormValue);
    }
  }

  public async login(userInfo: UserInfo): Promise<void> {
    await this.authService.auth('login', userInfo);
  }
}
