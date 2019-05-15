import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadProjectPage } from './download-project/download-project.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    DownloadProjectPage
  ],
  entryComponents: [
    DownloadProjectPage
  ],
  exports: [
    DownloadProjectPage
  ],
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ModalModule { }
