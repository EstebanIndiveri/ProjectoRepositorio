import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "../../services/global";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  
  public title:String;
  public project:Project;
  public status:String;
  public filesToUpload:Array<File>;
  public url:String;
  public save_project;

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _router: Router,
  	private _route: ActivatedRoute
  ) { 
    this.title="Editar Proyecto";
    this.url=Global.url
    
  }
  ngOnInit(){
  	this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getProject(id);
  	});
  }

  getProject(id){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.project = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }
  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){

          // subo la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image').then((result:any)=>{
              this.status='success';
              this.save_project=result.project;
              console.log(result);
  
            });
          }else{
            this.save_project=response.project;
            this.status='success';
          }
          
          console.log(response);
        }else{
          this.status='failed';
        }
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }

fileChangeEvent(fileinput:any){
    console.log(fileinput);
    this.filesToUpload= <Array<File>>fileinput.target.files;
  }

}
