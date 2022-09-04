import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}
  isLoggedin() {
    return !localStorage.getItem('token');
  }

  logoutUser() {
    this.router.navigate(['/auth/login']);
    this.authservice.logoutUser();
  }
}
