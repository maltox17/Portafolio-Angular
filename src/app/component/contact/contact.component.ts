import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { stringify } from '@angular/compiler/src/util';
import { Contact } from '../../models/contact';
import { $ } from 'protractor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ProjectService, UploadService]
})
export class ContactComponent implements OnInit {
  public title: string;
  public project: Project;
  public save_formulary: any;
  public status: string = '';
  public filesToUpload: Array<File>;
  public contact: Contact;
  private _contacts: Array<any>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2021,'','');
    this.filesToUpload = [];
    this.contact = new Contact('', '','');
    this._contacts = []

   }

  ngOnInit(): void{

  }

  onSubmit(form: any){
    this._contacts.push(this.contact.name, this.contact.email, this.contact.message);
    console.log(this._contacts)
    
    this.status = "good";
    form.reset();
  }





    
       
  
         

}
