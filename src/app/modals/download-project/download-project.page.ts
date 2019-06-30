import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';

/**
 * Modal para la descarga de proyectos
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-download-project',
  templateUrl: './download-project.page.html',
  styleUrls: ['./download-project.page.scss'],
})
export class DownloadProjectPage {

  /**
   * Codigo del proyecto a descargar
   */
  code: string;

  /**
   * Constructor de la clase
   *
   * @param projectService Servicio para trabajar con los proyectos
   * @param toastr Servicio para mostrar mensajes
   * @param router Servicio para controlar rutas
   * @param userService Servicio para trabajar con los usuarios
   */
  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * Permite realizar la descarga de un proyecto al usuario con la sesion activa
   */
  public downloadProject(): void {
    this.projectService.downloadProject(this.code, this.userService.user.id).subscribe((response: any) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.router.navigate(['/']);
    }, (httpErrorResponse: HttpErrorResponse) => {
      if (httpErrorResponse.error.data) {
        this.toastr.error(httpErrorResponse.error.data.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

}
