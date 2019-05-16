import { Injectable } from '@angular/core';
import { Project } from 'src/app/entities/project';
import { AppConstants } from 'src/app/app-constants';
import { HttpClient } from '@angular/common/http';

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
   * Direccion del api para obtener los recursos
   */
  private readonly URL_API: string = AppConstants.API_URL;

  /**
   * Constructor de la clase
   *
   * @param httpClient Servicio para realizar peticiones
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Permite obtener todos los proyectos de un usuario
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getProjects(userId: number) {
    return this.httpClient.get(this.URL_API + 'v1/projects/by-user/' + userId);
  }

  public downloadProject(code: string, userId: number) {
    return this.httpClient.get(this.URL_API + 'v1/projects/download/' + code + '/user/' + userId);
  }

}
