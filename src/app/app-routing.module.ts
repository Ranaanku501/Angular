import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CommonLoyoutComponent } from './common-loyout/common-loyout.component';
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {path: '', component: CommonLoyoutComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
  ]},
  
  { path: "admin", canActivate: [AuthGuard], children:[
    { path: '', loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
