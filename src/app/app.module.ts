import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatToolbarModule} from "@angular/material";
import { StatisticBlocksComponent } from './home/statistic-blocks/statistic-blocks.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list/list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsOverlayComponent } from './questions-overlay/questions-overlay.component';
import {ColorShifterService} from "./navigation-bar/color-shifter.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OpeningPageComponent } from './opening-page/opening-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    StatisticBlocksComponent,
    HomeComponent,
    ListComponent,
    LandingPageComponent,
    QuestionsOverlayComponent,
    OpeningPageComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    ColorShifterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
