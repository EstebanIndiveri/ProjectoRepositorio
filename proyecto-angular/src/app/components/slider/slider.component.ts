import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Input() etiqueta:boolean;

  constructor() { }

  ngOnInit() {
  
  $("#logo").click(function(e){
    e.preventDefault();
    $("header").css("background","green")
    .css("heigh","50px")
  })
  
  $('.galeria').bxSlider({
    mode:'fade',
    captions:false,
    slideWidth:this.anchura
  });
}
}
