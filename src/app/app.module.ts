import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DialogModule} from "@angular/cdk/dialog";
import {WizardComponent} from "./wizard/wizard.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,

    WizardComponent // Import standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
