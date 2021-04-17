import { NavTitleComponent } from './pages/components/nav-title/nav-title.component';
import { FormRegistrarComponent } from './pages/components/form-registrar/form-registrar.component';
import { FormIngresarComponent } from './pages/components/form-ingresar/form-ingresar.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: IngresarComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'home', component: HomeComponent},
  // tslint:disable-next-line:max-line-length
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
