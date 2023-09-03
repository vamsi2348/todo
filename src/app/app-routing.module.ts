import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './service/auth-gaurd.service';

const routes: Routes = [
  {
    path:"", redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
