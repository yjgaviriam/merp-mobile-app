import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DownloadProjectPage } from './download-project.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadProjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DownloadProjectPage],
  exports: [
    DownloadProjectPage
  ]
})
export class DownloadProjectPageModule {}
