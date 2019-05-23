import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Pagina del detalle de un proyecto
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  /**
   * Identificador del proyecto a consultar informacion
   */
  projectId: string;

  /**
   * Constructor de la clase
   *
   * @param activatedRoute Interfaz para rutas asociadas a componentes
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
