import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupRouterComponent } from './signup-router/signup-router.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { ContentfeedComponent } from './contentfeed/contentfeed.component';
import { LoginRouterComponent } from './login-router/login-router.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'feed',
    component: ContentfeedComponent
  },
  {
    path:'profile',
    component: AccountComponent
  },
  { 
    path: 'login', 
    component: LoginRouterComponent 
  },
  { 
    path: 'signup', 
    component: SignupRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginRouterComponent,SignupRouterComponent,HomepageComponent,AccountComponent,ContentfeedComponent ]
