import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResumeAnalyzerService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  analyzeResume(requestParam:any) {
    return firstValueFrom(this.http.post(this.apiUrl+'/api/ResumeAnalyzer/analyze', requestParam));
  }



}
