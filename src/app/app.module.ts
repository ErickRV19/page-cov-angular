import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormIngresarComponent } from './pages/components/form-ingresar/form-ingresar.component';
import { FormRegistrarComponent } from './pages/components/form-registrar/form-registrar.component';
import { NavTitleComponent } from './pages/components/nav-title/nav-title.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    HomeComponent,
    NavbarComponent,
    FormIngresarComponent,
    FormRegistrarComponent,
    NavTitleComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
