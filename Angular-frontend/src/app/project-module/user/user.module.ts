import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'users', component: UserProjectsComponent }];

@NgModule({
  declarations: [UserProjectsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class UserModule {}
