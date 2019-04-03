import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
// import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {
     path: '',
     loadChildren: './home/home.module#HomeModule'
  },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  {
   path: '**',
   redirectTo: '',
   pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
