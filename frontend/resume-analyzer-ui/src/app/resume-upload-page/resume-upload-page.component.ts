import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResumeAnalyzerService } from '../services/resume-analyzer.service';

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
selectedFile: any
isDragging: boolean = false;

constructor(private toastr: ToastrService, private resumeAnalyzerService: ResumeAnalyzerService) {}

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

async onAnalyzeClick() {
  console.log('Job Description:', this.jobDescription);
  console.log('Selected File:', this.selectedFile);
  
    const convertedFile = await this.convertToBase64(this.selectedFile);
  
  const reqObj = {
    jobDescription: this.jobDescription,
    resumeFile: convertedFile,
    fileName: this.selectedFile.name
  } 

  await this.resumeAnalyzerService.analyzeResume(reqObj).then((response) => {
    if(response){
      console.log('Analysis Response:', response);
    }
  });
  this.toastr.success('Analysis started. Check console for details.');
}


convertToBase64(file: File): Promise<string> {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {

      const base64 = (reader.result as string).split(',')[1];

      resolve(base64);

    };

    reader.onerror = () => {
      reject('File conversion failed');
    };

  });
}

}


