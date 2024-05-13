import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/components/header/header.component';
import { HeroComponent } from './pages/shared/components/hero/hero.component';
import { ProjectsComponent } from './pages/shared/components/projects/projects.component';
import { LeadformComponent } from './pages/shared/components/leadform/leadform.component';
import { BenefitsComponent } from './pages/shared/components/benefits/benefits.component';
import { WorkflowComponent } from './pages/shared/components/workflow/workflow.component';
import { AboutComponent } from './pages/shared/components/about/about.component';
import { MainservicesComponent } from './pages/shared/components/mainservices/mainservices.component';
import { ContactsComponent } from './pages/shared/components/contacts/contacts.component';
import { FooterComponent } from './pages/shared/components/footer/footer.component';
import { PriceComponent } from './pages/shared/components/price/price.component';
import { GalleryComponent } from './pages/shared/components/gallery/gallery.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AnnexComponent } from './pages/annex/annex.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { Project01Component } from './pages/project01/project01.component';
import { CursorComponent } from './pages/shared/components/cursor/cursor.component';
import { DialogComponent } from './pages/shared/components/dialog/dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { WorkflowgalleryComponent } from './pages/shared/components/workflowgallery/workflowgallery.component';
import { Project02Component } from './pages/project02/project02.component';
import { Project03Component } from './pages/project03/project03.component';
import { Project04Component } from './pages/project04/project04.component';
import { Project05Component } from './pages/project05/project05.component';
import { ProjectsMainComponent } from './pages/projects/projects.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    LeadformComponent,
    BenefitsComponent,
    WorkflowComponent,
    AboutComponent,
    MainservicesComponent,
    ContactsComponent,
    FooterComponent,
    PriceComponent,
    GalleryComponent,
    MainPageComponent,
    AnnexComponent,
    PricingComponent,
    Project01Component,
    CursorComponent,
    DialogComponent,
    WorkflowgalleryComponent,
    Project02Component,
    Project03Component,
    Project04Component,
    Project05Component,
    ProjectsMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
