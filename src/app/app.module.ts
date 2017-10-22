import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { AddStepBtnComponent } from './add-step-btn/add-step-btn.component';

export const appRoutes: Routes = [
  { path: '', component: Step1Component},
  { path: 'st2', component: Step2Component, pathMatch: 'full' },
  { path: 'st3', component: Step3Component, pathMatch: 'full' },
  { path: 'st4', component: Step4Component, pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    AddStepBtnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
