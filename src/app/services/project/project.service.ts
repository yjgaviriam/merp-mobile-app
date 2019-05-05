import { Injectable } from '@angular/core';
import { Project } from 'src/app/entities/project';

/**
 * Servicio principal de consulta de proyectos
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /**
   * Listado de proyectos
   */
  private projects: Project[] = [
    {
      id: 1,
      name: 'Proyecto A',
      image: '../../assets/img/project-management-2.png',
      code: 'SASR54',
      city: 'Armenia',
      address: 'Cerca del norte Cl. 17 # 20-55'
    },
    {
      id: 2,
      name: 'Proyecto B',
      image: '../../assets/img/img2.jpg',
      code: 'eeeeeeee',
      city: 'Armenia',
      address: 'Cra. 17 # 55-55'
    },
    {
      id: 3,
      name: 'Proyecto C',
      image: '../../assets/img/project-management.png',
      code: 'ttttyyyt',
      city: 'Calarcá',
      address: 'Cl. 27 # 20-55'
    }
  ];

  /**
   * Constructor de la clase
   */
  constructor() { }

  /**
   * Permite obtener el listado de proyectos
   */
  public getProjects(): Project[] {
    return this.projects;
  }

}
