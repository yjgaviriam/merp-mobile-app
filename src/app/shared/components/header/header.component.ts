import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que contiene el header de la aplicacion
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  /**
   * Contructor de la clase
   *
   * @param router Permite la manipulacion de las url
   */
  constructor(private router: Router) { }

  /**
   * Permite redirigir hacia la pagina principal
   */
  public goToHome(): void {
    this.router.navigate(['home']);
  }

}
