import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';

import {AlertComponent} from './_components';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {routing} from './app-routing.module';
import {
  MAT_DATE_LOCALE, MatAutocompleteModule, MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule,
  MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import 'hammerjs';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SeferComponent} from './sefer-crud/sefer';
import {GrupComponent} from './grup-crud/grup';
import {PersonelComponent} from './personel-crud/personel';
import {YolcuComponent} from './yolcu-crud/yolcu/yolcu.component';
import {UdhbKullaniciComponent} from './udhb-kullanici-crud/udhb-kullanici/udhb-kullanici.component';
import {UserComponent} from './user-crud/user/user.component';
import {AddPersonelComponent} from './personel-crud/add-personel/add-personel.component';
import {DeletePersonelComponent} from './personel-crud/delete-personel/delete-personel.component';
import {UpdatePersonelComponent} from './personel-crud/update-personel/update-personel.component';
import {AddUserComponent} from './user-crud/add-user/add-user.component';
import {UpdateYolcuComponent} from './yolcu-crud/update-yolcu/update-yolcu.component';
import {DeleteYolcuComponent} from './yolcu-crud/delete-yolcu/delete-yolcu.component';
import {AddYolcuComponent} from './yolcu-crud/add-yolcu/add-yolcu.component';
import {DeleteUserComponent} from './user-crud/delete-user/delete-user.component';
import {DeleteGrupComponent} from './grup-crud/delete-grup/delete-grup.component';
import {UpdateGrupComponent} from './grup-crud/update-grup/update-grup.component';
import {UpdateUdhbKullaniciComponent} from './udhb-kullanici-crud/update-udhb-kullanici/update-udhb-kullanici.component';
import {IptalSeferComponent} from './sefer-crud/iptal-sefer/iptal-sefer.component';
import {UpdateUserComponent} from './user-crud/update-user/update-user.component';
import {AddGrupComponent} from './grup-crud/add-grup/add-grup.component';
import {AddSeferComponent} from './sefer-crud/add-sefer/add-sefer.component';
import {UpdateSeferComponent} from './sefer-crud/update-sefer/update-sefer.component';
import {AktifSeferComponent} from './sefer-crud/aktif-sefer/aktif-sefer.component';
import { SendYolcuUdhbComponent } from './yolcu-crud/send-yolcu-udhb/send-yolcu-udhb.component';

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
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
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
    UserComponent,
    AddPersonelComponent,
    DeletePersonelComponent,
    UpdatePersonelComponent,
    AddYolcuComponent,
    DeleteYolcuComponent,
    UpdateYolcuComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UpdateUdhbKullaniciComponent,
    UpdateGrupComponent,
    DeleteGrupComponent,
    AddGrupComponent,
    AddSeferComponent,
    UpdateSeferComponent,
    IptalSeferComponent,
    AktifSeferComponent,
    SendYolcuUdhbComponent
  ],
  entryComponents: [
    AddPersonelComponent,
    DeletePersonelComponent,
    UpdatePersonelComponent,
    AddYolcuComponent,
    DeleteYolcuComponent,
    UpdateYolcuComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    UpdateUdhbKullaniciComponent,
    UpdateGrupComponent,
    DeleteGrupComponent,
    AddGrupComponent,
    AddSeferComponent,
    UpdateSeferComponent,
    IptalSeferComponent,
    AktifSeferComponent,
    SendYolcuUdhbComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
