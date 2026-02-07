import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { IntroComponent } from './components/intro/intro.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChooseAvatarComponent } from './components/choose-avatar/choose-avatar.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SettingsComponent } from './components/settings/settings.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent, data: { hideHeaderFooter: true, titleKey: 'TITLE.APP' } },
  { path: 'login', component: LoginComponent, data: { titleKey: 'TITLE.LOGIN' } },
  { path: 'signup', component: SignupComponent, data: { titleKey: 'TITLE.SIGNUP' } },
  { path: 'choose-avatar', component: ChooseAvatarComponent, data: { titleKey: 'TITLE.CHOOSE_AVATAR' } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { titleKey: 'TITLE.FORGOT_PASSWORD' } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { titleKey: 'TITLE.RESET_PASSWORD' } },
  { path: 'intro', component: IntroComponent, data: { titleKey: 'TITLE.INTRO' } },
  { path: 'imprint', component: ImprintComponent, data: { titleKey: 'TITLE.IMPRINT' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { titleKey: 'TITLE.PRIVACY_POLICY' } },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { guestAllowed: true, titleKey: 'TITLE.DASHBOARD' },
    children: [
      { path: '', component: ChatWindowComponent },
      { path: 'chat/channel/:id', component: ChatWindowComponent },
      { path: 'chat/user/:userId', component: ChatWindowComponent }
    ]
  },
  { path: 'settings', component: SettingsComponent, canActivate: [authGuard], data: { titleKey: 'TITLE.SETTINGS' } },
  { path: '**', component: PageNotFoundComponent, data: { hideHeaderFooter: true, titleKey: 'TITLE.NOT_FOUND' } }
];

