import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user-service.ts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getUserProject() {
    this.router.navigate(['/user.id']);
  }
}
