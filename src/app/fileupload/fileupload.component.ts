import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  FormBuilder, NgForm
} from '@angular/forms';
import { Router } from '@angular/router';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements AfterViewInit {
  title = 'fileUpload'
  @ViewChild('viewer') viewerRef: ElementRef;
  images;
  arrayData;
  array;
  index= 42;
  constructor(private http: HttpClient, private form: FormBuilder,private router:Router) {
    this.removeBrackets( '(123)');
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onSubmit() {
    console.log('upload');
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post < any > ('http://localhost:3000/file', formData).subscribe(
      (res) =>{
        this.arrayData = res.response;
     console.log(res.response);
    //  this.removeBrackets( res.response)
        
    },
      (err) => console.log(err),
    )
    // this.router.navigate(['/file']);
 
 
  }
  ngAfterViewInit(): void {
  
    // WebViewer({
    //   path: '../assets/lib',
    //   initialDoc: '../assets/files/Sample.pdf',

    // }, this.viewerRef.nativeElement).then(instance => {

    // })
  }

  generateReport(form:NgForm){
console.log(form.value);

  }
removeBrackets(value){
 
  let splitArray = value.split('');
  splitArray.shift();
  splitArray.pop();
  let removeString = splitArray.join('');
  console.log(removeString);
  
  return removeString;
}
 
}
