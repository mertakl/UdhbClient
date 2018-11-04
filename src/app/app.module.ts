import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';

import {AlertComponent} from './_components';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {routing} from './app-routing.module';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import 'hammerjs';
import { NavigationComponent } from './navigation/navigation.component';
import { SeferComponent } from './sefer/sefer.component';
import { PersonelComponent } from './personel/personel.component';
import { GrupComponent } from './grup/grup.component';
import { YolcuComponent } from './yolcu/yolcu.component';
import { UdhbKullaniciComponent } from './udhb-kullanici/udhb-kullanici.component';
import { UserComponent } from './user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    SeferComponent,
    PersonelComponent,
    GrupComponent,
    YolcuComponent,
    UdhbKullaniciComponent,
    UserComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
