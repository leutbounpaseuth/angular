import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './app-base/welcome/welcome.component';
import { AboutComponent } from './app-base/about/about.component';
import { ContactMgrComponent } from './contact/contact-mgr/contact-mgr.component';
import { LoginComponent } from './session/login/login.component';
import { CanActivateWhenLoggedIn } from './app-base/can-activate-when-logged-in';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
    canActivate: [CanActivateWhenLoggedIn],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactMgrComponent,
    canActivate: [CanActivateWhenLoggedIn],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
