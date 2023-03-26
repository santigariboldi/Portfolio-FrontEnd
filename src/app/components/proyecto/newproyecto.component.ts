import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';
  proyecto_image_url: string = '';

  constructor(private proyectoService: ProyectoService,private router: Router, public imageService: ImageService) {}

  ngOnInit(): void {
      
  }

  onCreate(): void{
    this.proyecto_image_url = this.imageService.url
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.proyecto_image_url);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
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
    const name = "foto_experiencia_" + file_name 
    this.imageService.uploadImage($event, name)
  }

}
