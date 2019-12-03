import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "../../services/global";
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {


  public title:String;
  public project:Project;
  public status:String;
  public filesToUpload:Array<File>;
  public save_project;
  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ) { 
    this.title="Crear Proyecto";
    this.project= new Project('','','','',2019,'','');

  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);

    // Guardo los datos del formulario
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){

          // subo la imagen
          if(this.filesToUpload){
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image').then((result:any)=>{
            this.status='success';
            this.save_project=result.project;
            console.log(result);
            form.reset();

          });
        }else{
          this.save_project=response.project;
          this.status='success'
          form.reset();
        }
          
          console.log(response);
        }else{
          this.status='failed';
        }
        
      },
      error=>{
        console.log(<any>error);
      }

    );
    
  
  }

  fileChangeEvent(fileinput:any){
    console.log(fileinput);
    this.filesToUpload= <Array<File>>fileinput.target.files;
  }
}
