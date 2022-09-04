import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/Service/user-service.ts.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss'],
})
export class UserProjectsComponent implements OnInit {
  projects: IUser[] = [];
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.getUserProject();
  }
  update(id: string) {
    this.userservice;
  }
  getUserProject() {
    this.userservice.fetchUser().subscribe((res) => {
      return (this.getUserProject = res.getUser);
    });
  }
}
