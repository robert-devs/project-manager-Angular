import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

import { AdminModule } from './project-module/admin/admin.module';
import { UserModule } from './project-module/user/user.module';
import { NavComponent } from './Components/nav/nav.component';

// import { AddProjectComponent } from './project-module/admin/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    NavComponent,
    // AddProjectComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    UserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
