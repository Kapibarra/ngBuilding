import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AnnexComponent } from './pages/annex/annex.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { Project01Component } from './pages/project01/project01.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, // маршрут для главной страницы
  { path: 'annex', component: AnnexComponent }, // маршрут для пристроек
  { path: 'pricing', component: PricingComponent }, // маршрут для цены
  { path: 'project01', component: Project01Component }, // маршрут для проекта 1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
