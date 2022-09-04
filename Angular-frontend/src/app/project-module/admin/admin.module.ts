import { NgModule } from '@angular/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'addProject', component: AddProjectComponent },
];
@NgModule({
  declarations: [AddProjectComponent, UsersComponent, ProjectsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AdminModule {}
