import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/vistas/dashboard/dashboard.component";
import {EditarComponent} from "./components/vistas/editar/editar.component";
import {NuevoComponent} from "./components/vistas/nuevo/nuevo.component";
import {LoginComponent} from "./components/vistas/login/login.component";


const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full' },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'nuevo', component:NuevoComponent },
  { path: 'editar', component:EditarComponent },
  { path: 'login', component:LoginComponent },

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent]
