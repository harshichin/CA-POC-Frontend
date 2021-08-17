import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {path:'file',component:FileComponent},
  {path:'fileupload',component:FileuploadComponent},
  {
    path:'',
    redirectTo:'fileupload',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
