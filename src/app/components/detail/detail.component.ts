import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, Params, ActivatedRoute} from '@angular/router'
import { observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public confirm: string;
  public cancel: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.url = Global.url;
    this.confirm = 'dontWant';
    this.project = new Project('','','','',2021,'','');
    this.cancel = 'off';
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProject(id);
    })
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;

      },
      error => {
        console.log(<any>error);

      }
    )

  }

  setConfirm(confirm:string){
    this.confirm = 'want';

  }

  setCancel(confirm:string){
    this.confirm = 'dontWant';
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/proyectos']);
        }

      },
      error => {
        console.log(<any>error);
      }
    )

  }

}
