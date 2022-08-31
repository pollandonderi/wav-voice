import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppComponent } from './app.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadertopComponent } from './headertop/headertop.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaindashComponent } from './maindash/maindash.component';
import { NgForm } from '@angular/forms';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadertopComponent,
    LoginComponent,
    RegisterComponent,
    MaindashComponent,
    TopnavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    // MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
