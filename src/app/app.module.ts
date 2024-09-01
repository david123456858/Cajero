import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@Angular/forms';
import { LogginComponent } from './pages/public/loggin/loggin.component';
import {HomeLoginComponent} from './pages/public/homeLogin/homeLogin.component'

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeLoginComponent
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