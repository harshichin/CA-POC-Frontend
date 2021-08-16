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
  FormBuilder
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
  constructor(private http: HttpClient, private form: FormBuilder,private router:Router) {}

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
      (res) => console.log(res),
      (err) => console.log(err)


    )
    this.router.navigate(['/file']);
  }
  ngAfterViewInit(): void {
    // WebViewer({
    //   path: '../assets/lib',
    //   initialDoc: '../assets/files/Sample.pdf',

    // }, this.viewerRef.nativeElement).then(instance => {

    // })
  }

}
