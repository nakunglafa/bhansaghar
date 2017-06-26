import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { authService } from './shared/auth.service';
import { HttpModule } from '@angular/http';
import { registerService } from './shared/register.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [authService,registerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
