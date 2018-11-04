import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';
import {HomeComponent} from './home';
import {SeferComponent} from './sefer/sefer.component';
import {GrupComponent} from './grup/grup.component';
import {YolcuComponent} from './yolcu/yolcu.component';
import {PersonelComponent} from './personel/personel.component';
import {UdhbKullaniciComponent} from './udhb-kullanici/udhb-kullanici.component';
import {UserComponent} from './user/user.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sefer', component: SeferComponent, canActivate: [AuthGuard]},
  {path: 'grup', component: GrupComponent, canActivate: [AuthGuard]},
  {path: 'yolcu', component: YolcuComponent, canActivate: [AuthGuard]},
  {path: 'personel', component: PersonelComponent, canActivate: [AuthGuard]},
  {path: 'udhb-kullanici', component: UdhbKullaniciComponent, canActivate: [AuthGuard]},
  {path: 'kullanici', component: UserComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
