import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreE: string;
  descripcionE: string;
  educacion_image_url: string;

  constructor(private educacionService: EducacionService, private router:Router,  public imageService: ImageService) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    this.educacion_image_url = this.imageService.url
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.educacion_image_url);
    this.educacionService.save(educacion).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  
  uploadImage($event: any) {
    var file_name: string = "";
    if($event.target.files.length > 0) 
    {
      file_name = $event.target.files[0].name;
    }
    const name = "foto_empresa_" + file_name 
    this.imageService.uploadImage($event, name)
  }

}
