import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public filesToUpload: Array<File>;
  public url: string;
  

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { 
    this.title = "Editar proyecto";
    this.url = Global.url;
    this.project = new Project('','','','',2021,'','');
    //this.project = new Project('','','','',2021,'','');
    this.filesToUpload = [];
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

  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe(
      response => {

        if(response.project){
          
          //Subir La imagen
          if(this.filesToUpload.length){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result: any) => {
              this.save_project = result.project;
              this.status = "good";
              
              form.reset();
  
            });
          }else{
            this.save_project = response.project;
              this.status = "good";
              
              form.reset();

          }

        }else{
          this.status = "bad";
    
        }
        

      },
      error => {
        console.log(<any>error);

      }
    )
  }

  fileChangeEvent(fileinput: any){
    this.filesToUpload = <Array<File>>fileinput.target.files;
  }

}
