import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailPage } from './project-detail.page';
import { SharedModule } from '../../shared/shared.module';

/**
 * Modulo de la pagina del detalle de un proyecto
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectDetailPage
      }
    ])
  ],
  declarations: [ProjectDetailPage]
})
export class ProjectDetailPageModule {}
