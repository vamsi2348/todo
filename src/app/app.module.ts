import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//formsModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

//FireBase
import {environment} from '../environment/environment';
import {AngularFireModule}  from '@angular/fire/compat';

//database
// import { getDatabase } from '@angula'
//Routing module
import { RouterModule } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // app,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


