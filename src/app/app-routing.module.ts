import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeUploadPageComponent } from './resume-upload-page/resume-upload-page.component';

const routes: Routes = [

{
  path: '',
  component: ResumeUploadPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
