import { Component } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../entities/project';
import { ModalController } from '@ionic/angular';
import { DownloadProjectPage } from '../modals/download-project/download-project.page';

/**
 * Pagina de inicio de la aplicacion
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Contiene el listado de proyectos
   */
  public projects: Project[];

  /**
   * Constructor de la clase
   *
   * @param projectService Servicio de gestion de proyectos de la aplicacion
   */
  public constructor(private projectService: ProjectService, private modalController: ModalController) {
    this.projects = this.projectService.getProjects();
  }

  /**
   * Permite abrir un modal para descargar un nuevo proyecto
   */
  public async showModalAddProject() {
    const modal = await this.modalController.create({
      component: DownloadProjectPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
