import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   public title:string;
   public subtitle:string;
   public email:string;
   public about_uno:String;
   public about_two:String;
   public about_three:String;
   public about_four:String;
  constructor() { 
    this.title="Esteban Indiveri";
    this.subtitle="Desarrollador web";
    this.email="esteban.indiveri@gmail.com";
    this.about_uno=`
    Mi nombre es Esteban Indiveri, Lic. en Ciencias de la Comunicación, diseñador UX/UI. Actualmente estudiante de programación, e ingeniería en Software, resido en la ciudad de Córdoba capital, siempre fui un apasionado por la tecnología y la posibilidad de poder comunicar a través de ella de manera amigable al usuario para que el mismo tenga una gran experiencia de usabilidad y continue utilizando el servicio que le brindamos es por eso que es necesario una constante iteración para identificar nuevas posibilidades y corregir aquello que este perjudicando la experiencia de uso.`
    this.about_two=`
    
    Actualmente estoy en busca de posibilidades de poder realizar proyectos y unirme a un grupo de trabajo para poder cumplir desafios y continuar creciendo en este rubro tan inmenso.`
    this.about_three=`
    Información sobre la página web que estas visitando:
    Esta página esta realizada desde cero usando NodeJs y Mongodb con Express para el Back-end y Javascript, Typescript, Jquery y Angular para el Front-end.
    La mismma es una página que puede recibir información a través del formulario, la información es almacenada en nuestro backend y luego es pedida nuevamente por la web para ser mostrada en la sección proyectos, donde se realiza un listado completo de los mismos.`
  this.about_four=`
    Espero sea de tu agrado.
    Podrás encontrar el resto de mis proyectos en repositorios de ` 

  }

  ngOnInit() {
  }

}
