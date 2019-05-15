import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-project',
  templateUrl: './download-project.page.html',
  styleUrls: ['./download-project.page.scss'],
})
export class DownloadProjectPage {

  code: string;

  constructor(private projectService: ProjectService, private router: Router) {  }

  public downloadProject() {  
    this.projectService.downloadProject(this.code).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
