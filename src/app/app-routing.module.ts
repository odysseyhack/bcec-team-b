import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionsOverlayComponent} from './questions-overlay/questions-overlay.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {OpeningPageComponent} from './opening-page/opening-page.component';

const routes: Routes = [
  {path: '', component: OpeningPageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: QuestionsOverlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
