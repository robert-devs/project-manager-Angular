import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { IUser } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/Service/auth-services.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  addForms!: FormGroup;

  allowedEmails = ['@thejitu.com'];
  Success = false;
  errorMessage: string = '';
  constructor(
    private FB: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForms = this.FB.group({
      name: [null, [Validators.required]],
      username: [
        null,
        [Validators.required],
        this.checkEmails.bind(this) as AsyncValidatorFn,
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  registerUser() {
    this.errorMessage = '';
    if (this.addForms.valid) {
      const newRegistration: IUser = this.addForms.value;
      this.authService.registerUser(newRegistration).subscribe((res) => {
        this.Success = true;
        if (this.Success) {
          this.router.navigate(['auth/register']);
        } else {
          alert('user rigistering failed registered');
        }
      });
    }
  }
  checkEmails(control: FormControl): Promise<{ [s: string]: boolean } | null> {
    const promise = new Promise<{ [s: string]: boolean } | null>(
      (resolve, reject) => {
        setTimeout(() => {
          if (this.allowedEmails.includes(control.value)) {
            resolve({ unallowedEmails: true });
          }
          resolve(null);
        }, 2000);
      }
    );
    return promise;
  }
}
