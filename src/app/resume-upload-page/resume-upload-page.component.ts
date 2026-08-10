import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-upload-page',
  templateUrl: './resume-upload-page.component.html',
  styleUrls: ['./resume-upload-page.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ResumeUploadPageComponent {

jobDescription: string = '';
selectedFile: File | null = null;
isDragging: boolean = false;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  }
}

onDragOver(event: DragEvent): void {
  event.preventDefault();
  this.isDragging = true;
}

onDragLeave(event: DragEvent): void {
  event.preventDefault();
  this.isDragging = false;
}

onDrop(event: DragEvent): void {
  event.preventDefault();
  this.isDragging = false;
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    this.selectedFile = files[0];
  }

}

onAnalyzeClick(): void {
  console.log('Job Description:', this.jobDescription);
  console.log('Selected File:', this.selectedFile);
}

}
