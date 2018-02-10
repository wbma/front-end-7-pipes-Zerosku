import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MediaService} from './services/media.service';
import { UploadComponent } from './upload/upload.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TopBarComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
