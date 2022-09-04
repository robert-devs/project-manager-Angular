import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iprojects } from 'src/app/interfaces/userInterface';
import { UserProjectService } from 'src/app/Service/user-project.service';
import { UserService } from 'src/app/Service/user-service.ts.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  @Input() projects!: Iprojects[];
  constructor(
    private router: Router,
    private projectservice: UserProjectService,
    private userService: UserProjectService,
    private projectservise: UserService
  ) {}

  ngOnInit(): void {
    this.projectservice.getProjects();
    this;
  }
}
