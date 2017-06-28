import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule,CanActivate,CanActivateChild } from '@angular/router';
import { authGuard } from "./guard/auth.guard";

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditKitchenComponent } from "./edit-kitchen/edit-kitchen.component";

export const router:Routes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
        canActivate:[authGuard]
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'register',
        component:RegisterComponent,
    },
    {
        path:'dashboard',
        canActivate:[authGuard],
        component:DashboardComponent ,
        children:
        [
            {
                path:'',
                redirectTo:'editKitchen',
                pathMatch:'full'
            },
            {
                path:'editKitchen',
                component:EditKitchenComponent
            }

        ]
       
    }
];

export const routes: ModuleWithProviders=RouterModule.forRoot(router);