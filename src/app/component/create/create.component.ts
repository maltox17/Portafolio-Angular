import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  

  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public filesToUpload: Array<File>;
  //public status: string;
  public url: string;
  

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    
  ) { 
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2021,'','');
    this.filesToUpload = [];
    this.url = "http://localhost:3700/api/"; 
  }

  ngOnInit(): void {
  }

 

  onSubmit(form: any){

    //Guardar los datos basicos
    let write = document.getElementById("result");
    this._projectService.saveProject(this.project).subscribe(
      response => { 
        if(response.project){
          
          //Subir La imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result: any) => {
            this.save_project = result.project;
            this.status = "good";
            
            form.reset();

          });



          /*var result: any = document.querySelector("#result");
          result.innerHTML = 'El projecto se ha subido satisfactoriamente';*/
          //this.status = 'success';
        }else{
          this.status = "bad";
          //this.status = 'failed';
        }

      },
      error => {
        console.log(<any>error);
      }
      
    );
  }

  fileChangeEvent(fileinput: any){
    this.filesToUpload = <Array<File>>fileinput.target.files;
  }

}
