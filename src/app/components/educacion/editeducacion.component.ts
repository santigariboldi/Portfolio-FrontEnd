import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
educacion: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router,  public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.educacion_image_url = this.imageService.url
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
  
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "foto_educacion_" + id 
    this.imageService.uploadImage($event, name)
  }

}
