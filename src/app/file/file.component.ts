import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileserviceService } from '../fileservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  addItem: FormGroup;
  formData: any;
  dt: any;
  dataDisplay: any;

  constructor(private fb: FormBuilder,private router: Router,private file:FileserviceService,private http: HttpClient) { }

  ngOnInit(): void {

}


  }


