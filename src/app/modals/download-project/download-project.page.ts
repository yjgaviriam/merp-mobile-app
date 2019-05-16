import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-download-project',
  templateUrl: './download-project.page.html',
  styleUrls: ['./download-project.page.scss'],
})
export class DownloadProjectPage {

  code: string;

  user: User;

  constructor(private projectService: ProjectService, private router: Router, private userService: UserService) { 
    this.user = this.userService.getStatusLogged();
  }

  public downloadProject() {
    this.projectService.downloadProject(this.code, this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
