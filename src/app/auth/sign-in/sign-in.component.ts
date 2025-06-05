import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignInDataType } from '../auth.types';
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

  isPasswordVisible: boolean = false;

  form = new FormGroup({
    username: new FormControl('emilys', [Validators.required]),
    password: new FormControl('emilyspass', [Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) { }

  onTogglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    if (!this.form.valid) {
      this.showAlert = true;

      // if (this.form.value?.password?.length < 6) {
      //   this.form.setErrors({ password: 'Password is not long enough' });
      //   this.alertErrorMessage = 'Password is not long enough';
      // }

      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      return;

    }

    this.authService.signIn(this.form.value as SignInDataType).subscribe((response) => {
      this.router.navigate(['auth', 'user-dashboard'])
      console.log(response, 'response')
    });
  }
}