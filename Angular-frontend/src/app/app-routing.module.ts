import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
// import { LoginComponent } from './Components/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
