import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@Angular/forms';
import { LogginComponent } from './pages/public/loggin/loggin.component';
import {HomeLoginComponent} from './pages/public/homeLogin/homeLogin.component';
import { MainpageComponent } from './pages/private/mainpage/mainpage.component';
import { OptionspageComponent } from './pages/private/optionspage/optionspage.component'

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeLoginComponent,
    MainpageComponent,
    OptionspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// son las importanciones globales 