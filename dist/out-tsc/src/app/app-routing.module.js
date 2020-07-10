import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupRouterComponent } from './signup-router/signup-router.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { ContentfeedComponent } from './contentfeed/contentfeed.component';
import { LoginRouterComponent } from './login-router/login-router.component';
import { AuthGuardService } from './login-router/auth-guard.service';
import { canDeactivateGuard } from './signup-router/can-deactivate-guard.service';
import { MypostsComponent } from './myposts/myposts.component';
const routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'posts',
        canActivate: [AuthGuardService],
        component: ContentfeedComponent
    },
    {
        path: 'profile',
        canActivate: [AuthGuardService],
        component: AccountComponent
    },
    {
        path: 'login',
        component: LoginRouterComponent
    },
    {
        path: 'signup',
        canDeactivate: [canDeactivateGuard],
        component: SignupRouterComponent
    },
    {
        path: 'my-posts',
        canDeactivate: [canDeactivateGuard],
        component: MypostsComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [LoginRouterComponent, SignupRouterComponent, HomepageComponent, AccountComponent, ContentfeedComponent, MypostsComponent];
//# sourceMappingURL=app-routing.module.js.map