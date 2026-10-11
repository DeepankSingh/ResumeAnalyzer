import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeUploadPageComponent } from './resume-upload-page/resume-upload-page.component';
import { ReseumePreviewPageComponent } from './resume-upload-page/reseume-preview-page/reseume-preview-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ReseumePreviewPageComponent
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
