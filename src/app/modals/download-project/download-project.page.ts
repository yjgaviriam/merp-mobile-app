import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-download-project',
  templateUrl: './download-project.page.html',
  styleUrls: ['./download-project.page.scss'],
})
export class DownloadProjectPage {

  code: string;

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router, private userService: UserService
  ) { }

  public downloadProject() {
    this.projectService.downloadProject(this.code, this.userService.user.id).subscribe((response: any) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.router.navigate(['/']);
    });
  }

}
