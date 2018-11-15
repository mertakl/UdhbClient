import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';

import {GrupComponent} from './grup-crud/grup';
import {SeferComponent} from './sefer-crud/sefer';
import {YolcuComponent} from './yolcu-crud/yolcu/yolcu.component';
import {PersonelComponent} from './personel-crud/personel';
import {UdhbKullaniciComponent} from './udhb-kullanici-crud/udhb-kullanici/udhb-kullanici.component';
import {UserComponent} from './user-crud/user/user.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: SeferComponent, canActivate: [AuthGuard]},
  {path: 'grup', component: GrupComponent, canActivate: [AuthGuard]},
  {path: 'yolcu', component: YolcuComponent, canActivate: [AuthGuard]},
  {path: 'personel', component: PersonelComponent, canActivate: [AuthGuard]},
  {path: 'udhb-kullanici', component: UdhbKullaniciComponent, canActivate: [AuthGuard]},
  {path: 'kullanici', component: UserComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
