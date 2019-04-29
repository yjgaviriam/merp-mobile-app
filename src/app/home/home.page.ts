import { Component } from '@angular/core';
import { ProjectService } from '../services/project/project.service';

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
  public projects: any[];

  /**
   * Constructor de la clase
   *
   * @param projectService Servicio de gestion de proyectos de la aplicacion
   */
  public constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
