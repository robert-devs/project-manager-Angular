import { NgModule } from '@angular/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'projects' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'add-project', component: AddProjectComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AddProjectComponent,
    UsersComponent,
    ProjectsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    //
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
