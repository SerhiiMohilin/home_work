import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignedUserDataType, SignInDataType } from '../auth.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  showAlert = false;
  alertErrorMessage = '';

  isPasswordHidden = false;

  form = new FormGroup({
    username: new FormControl('emilys', [Validators.required]),
    password: new FormControl('emilyspass', [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) { }

  onTogglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  onSubmit() {
    if (!this.form.valid) {
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 3000);

      return;
    }

    this.authService
      .signIn(this.form.value as SignInDataType)
      .subscribe((response) => {
        this.authService.authUserData = response;
        this.router.navigate(['auth', 'user-dashboard']);
        localStorage.setItem('lastSeen', new Date().toISOString());
      });
  }
}