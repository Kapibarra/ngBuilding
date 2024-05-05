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
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
