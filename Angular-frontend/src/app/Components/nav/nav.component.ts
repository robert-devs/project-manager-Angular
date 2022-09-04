import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/Service/auth-services.service';
import { UserService } from 'src/app/Service/user-service.ts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public autthservice: AuthServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  isLoggedin() {
    return !localStorage.getItem('token');
  }

  logoutUser() {
    this.router.navigate(['/']);
    this.autthservice.logoutUser();
  }
}
