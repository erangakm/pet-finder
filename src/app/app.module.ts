import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LostPetReportComponent } from './forms/lost-pet-report/lost-pet-report.component';
import { HomepageHeroComponent } from './homepage-hero/homepage-hero.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LostPetReportComponent,
    HomepageHeroComponent,
    HomepageContentComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
