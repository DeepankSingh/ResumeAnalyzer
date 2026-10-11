import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

constructor(private toastr: ToastrService) {}

isValid(file: File): boolean {
  if(!file) {
    this.toastr.error('No file selected');
    return false;
  }
  const extension = file.name.split('.').pop()?.toLowerCase();
  if(extension === 'pdf' || extension === 'docx' || extension === 'doc') {
    if(file.size <= 5 * 1024 * 1024) {
      return true;
    }else {
      this.toastr.error('File size exceeds 5MB');
      return false;
    }
  }else {
    this.toastr.error('Invalid file type. Please upload a PDF or Word document.');
    return false;
  }
}

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0 && this.isValid(input.files[0])) {
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
  if (files && files.length > 0 && this.isValid(files[0])) {
    this.selectedFile = files[0];
  }

}

onAnalyzeClick(): void {
  console.log('Job Description:', this.jobDescription);
  console.log('Selected File:', this.selectedFile);
  this.toastr.success('Analysis started. Check console for details.');
}




}
