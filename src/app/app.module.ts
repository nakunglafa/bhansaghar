import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { authService } from './shared/auth.service';
import { HttpModule } from '@angular/http';
import { registerService } from './shared/register.service';
import { authGuard } from "./guard/auth.guard";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EditKitchenComponent } from './edit-kitchen/edit-kitchen.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    EditKitchenComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [authService,registerService,authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
