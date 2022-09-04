import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUserService } from 'src/app/Service/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly BASE_URL = 'http://localhost:5000';
  RegisterProject: [] = [];
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  @ViewChild('form') form!: NgForm;

  constructor(public loginservise: LoginUserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginservise.loginUser(this.form.value).subscribe((res) => {
      if (res.success) {
        //
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('Logged In successfully');

        if (res.user.role === 'admin') {
          this.router.navigate(['/admin.']);
        } else {
          this.router.navigate(['./user/-']);
        }
      } else {
        alert(res.message);
      }
    });
    // .catch(error=>{
    //   console.log(error.response);

    // })
  }
}
