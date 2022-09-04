import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './project-module/auth/login/login.component';
import { RegisterUserComponent } from './project-module/auth/register-user/register-user.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserComponent } from './project-module/user/user.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./project-module/admin/admin.module').then(
        (mod) => mod.AdminModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./project-module/user/user.module').then((mod) => mod.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./project-module/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
