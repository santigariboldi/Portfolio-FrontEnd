import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/Person.mode';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/Person.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  person: Person = null;
  constructor(
    private activatedRouter: ActivatedRoute, 
    private personService: PersonService, 
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personService.detail(id).subscribe(
      data =>{
        this.person = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.person.profile_image_url = this.imageService.url
    this.personService.update(id, this.person).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la informacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadProfileImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "foto_perfil_" + id 
    this.imageService.uploadImage($event, name)
  }  
  
  uploadBannerImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "foto_banner_" + id 
    this.imageService.uploadImage($event, name)
  }
}
