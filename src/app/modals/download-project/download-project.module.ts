import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadProjectPage } from './download-project.page';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Modulo del modal de descargar proyecto
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule
    ],
    declarations: [
        DownloadProjectPage
    ],
    entryComponents: [
        DownloadProjectPage
    ],
    exports: [
        DownloadProjectPage
    ]
})
export class DownloadProjectPageModule { }
