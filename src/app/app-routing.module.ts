import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HomePageComponent } from './featues/pages/home-page/continers/home-page/home-page/home-page.component';
import { AboutComponent } from './featues/pages/about/about.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' }, // redirect to `first-component`
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
