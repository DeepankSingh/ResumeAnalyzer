import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeUploadPageComponent } from './resume-upload-page/resume-upload-page.component';
import { ReseumePreviewPageComponent } from './resume-upload-page/reseume-preview-page/reseume-preview-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ReseumePreviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeUploadPageComponent,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
