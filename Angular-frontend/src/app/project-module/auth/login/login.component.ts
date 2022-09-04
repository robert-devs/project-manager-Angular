import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.errorMessage = '';
    this.authService.loginUser(form.value).subscribe(
      (res) => {
        if (res.success) {
          //
          localStorage.setItem('token', res.token);
          localStorage.setItem('user/admin', JSON.stringify(res.user));

          alert('Logged In successfully');

          console.log(res);

          if (res.user.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        } else {
          alert(res.message);
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(error);
      }
    );
    // .catch(error=>{
    //   console.log(error.response);

    // })
  }
}
