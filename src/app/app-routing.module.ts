import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadertopComponent } from './headertop/headertop.component';
import { LoginComponent } from './login/login.component';
import { MaindashComponent } from './maindash/maindash.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: "", component: HeadertopComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "maindash", component: MaindashComponent},
    // use the route from the login button 
    // {path: "login", component: LoginComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }