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
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, NotFoundComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
