import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {

  constructor(private http:HttpClient, private router:Router) { }

  getReportTemplate(){
    return this.http.get<any>(`http://localhost:3000/file'`);
  }
}
