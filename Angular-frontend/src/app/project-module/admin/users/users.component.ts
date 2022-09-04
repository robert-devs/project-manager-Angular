import { Component, OnInit } from '@angular/core';
import {
  Iprojects,
  IUser,
  UserInterface,
} from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/Service/user-service.ts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: UserInterface[];
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.fetchUser();
  }
  fetchUser() {
    this.userservice.fetchUser().subscribe((res) => {
      this.users = res.users;
    });
  }
}
