import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})

export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  experiencia_image_url: string ='';

  constructor(private experienciaService: ExperienciaServiceService, private router: Router, public imageService: ImageService) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    this.experiencia_image_url = this.imageService.url
    const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.experiencia_image_url);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
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
