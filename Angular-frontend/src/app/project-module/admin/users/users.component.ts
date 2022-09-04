import { Component, OnInit } from '@angular/core';
import {
  Iprojects,
  IUser,
  UserInterface,
} from 'src/app/interfaces/userInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  User!: UserInterface[];
  constructor() {}

  ngOnInit(): void {}
}
