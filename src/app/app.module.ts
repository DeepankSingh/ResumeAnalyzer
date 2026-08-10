import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeUploadPageComponent } from './resume-upload-page/resume-upload-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeUploadPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
