import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AnnexComponent } from './pages/annex/annex.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { Project01Component } from './pages/project01/project01.component';
import { Project02Component } from './pages/project02/project02.component';
import { Project03Component } from './pages/project03/project03.component';
import { Project04Component } from './pages/project04/project04.component';
import { Project05Component } from './pages/project05/project05.component';
const routes: Routes = [
  { path: '', component: MainPageComponent }, // маршрут для главной страницы
  { path: 'annex', component: AnnexComponent }, // маршрут для пристроек
  { path: 'pricing', component: PricingComponent }, // маршрут для цены
  { path: 'project01', component: Project01Component }, // маршрут для проекта 1
  { path: 'project02', component: Project02Component }, // маршрут для проекта 2
  { path: 'project03', component: Project03Component }, // маршрут для проекта 3
  { path: 'project04', component: Project04Component }, // маршрут для проекта 4
  { path: 'project05', component: Project05Component }, // маршрут для проекта 5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
