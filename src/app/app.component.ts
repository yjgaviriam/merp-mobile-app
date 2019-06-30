import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from './services/project/project.service';
import { Project } from './entities/project';
import { User } from './entities/user';
import { UserService } from './services/user/user.service';
import { AppConstants } from './app-constants';
import { Router } from '@angular/router';

/**
 * Componente principal de la aplicacion
 *
 * @author Jhonier Gaviria M. - Abr. 28-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  /**
   * Contiene el listado de proyectos
   */
  public projects: Project[];

  /**
   * Constructor de la clase
   *
   * @param platform Permite trabajar con las distintas plataformas [android, cordova, electron, ios, ..]
   * @param splashScreen Permite mostrar u ocultar el splash
   * @param statusBar Permite controlar la barra de estado
   * @param translateService Permite controlar el cambio de idioma
   * @param projectService Servicio de gestion de proyectos de la aplicacion
   * @param alertController Permite gestionar alertas
   * @param userService Servicio para trabajar con los usuarios
   * @param router Servicio para controlar rutas
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService: TranslateService,
    private projectService: ProjectService,
    private alertController: AlertController,
    public userService: UserService,
    private router: Router
  ) {
    this.initializeApp();
    let userLang = localStorage.getItem('__LANGUAGE__') !== null ? localStorage.getItem('__LANGUAGE__') : navigator.language.split('-')[0];
    userLang = /(en|de|it|fr|es|be)/gi.test(userLang) ? userLang : 'en';
    localStorage.setItem('__LANGUAGE__', userLang);
    this.translateService.use(userLang);
    // Si existe el usuario se descargan sus proyectos
    if (this.userService.user && this.userService.user.id) {
      this.projectService.getProjects(this.userService.user.id).subscribe((response: any) => {
        this.projects = response.data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Metodo de inicio de la aplicacion
   */
  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Permite cambiar el idioma de la aplicacion
   *
   * @param language El idioma al que se cambiara la aplicacion [en, es]
   */
  private changeLanguage(language: string): void {
    this.translateService.use(language);
    localStorage.setItem('__LANGUAGE__', language);
  }

  /**
   * Permite cerrar sesion
   */
  public logout(): void {
    this.userService.removeStatusLogged();
    location.reload();
  }

  /**
   * Permite mostrar una ventana de alerta para seleccionar el lenguaje para la aplicacion
   *
   * @param fields Contiene las variable de traduccion necesarias para el alert
   */
  private async presentChangeLanguage(fields: any) {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          type: 'radio',
          label: fields.ENGLISH,
          value: AppConstants.LANGUAGES.EN,
          checked: localStorage.getItem('__LANGUAGE__') === AppConstants.LANGUAGES.EN
        },
        {
          type: 'radio',
          label: fields.SPANISH,
          value: AppConstants.LANGUAGES.ES,
          checked: localStorage.getItem('__LANGUAGE__') === AppConstants.LANGUAGES.ES
        }
      ],
      buttons: [
        {
          text: fields.CANCEL,
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: fields.OK,
          handler: (language: string) => {
            this.changeLanguage(language);
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Permite cargar las variables de idioma necesarias e invocar el metodo para cargar el alerta de seleccionar lenguaje
   */
  public showPresentChangeLanguage(): void {
    this.translateService.get(['ENGLISH', 'SPANISH', 'OK', 'CANCEL']).subscribe((result: any) => {
      this.presentChangeLanguage(result);
    });
  }

}
