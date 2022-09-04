import { Component, OnInit } from '@angular/core';
import { Iprojects } from 'src/app/interfaces/userInterface';
import { UserProjectService } from 'src/app/Service/user-project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Iprojects[] = [];

  constructor(private projectService: UserProjectService) {}

  ngOnInit(): void {
    this.allProject();
  }
  allProject() {
    this.projectService.getProjects().subscribe((res) => {
      this.projects = res.projects;
    });
  }
  onDelete(id: string = '') {
    this.projectService.deleteProject(id).subscribe((res) => {
      this.allProject();
    });
  }
}
