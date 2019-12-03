import { Component, OnInit, ViewChild} from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider:number;
  public captions:boolean;
  @ViewChild ('textos',({static:true})) textos;
  constructor() {
    this.captions=false;
   }

  ngOnInit() {
    alert (this.textos.nativeElement.textContent);
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 600
    });
  }
  cargarSlider(){
    this.anchuraToSlider=this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider=null;
  }
  

}
