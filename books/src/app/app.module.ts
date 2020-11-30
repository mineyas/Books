import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { LivreApiComponent } from './api/livre-api/livre-api.component'
import { LivreApiService } from './api/livre-api.service';
import { LivreFormComponent } from './livre/livre-form/livre-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LivreComponent,
    LivreApiComponent,
    LivreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [LivreApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
