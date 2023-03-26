import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ImageService } from 'src/app/service/image.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit{
  nombre: string;
  porcentaje: number;
  skill_image_url: string;

  constructor(private skillsService: SkillsService, private router: Router, public imageService: ImageService ) {}

  ngOnInit(): void {
      
  }

  onCreate(): void{
    this.skill_image_url = this.imageService.url
    const skills = new Skills(this.nombre, this.porcentaje, this.skill_image_url);
    this.skillsService.save(skills).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al añadir la skill");
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
    const name = "foto_skill_" + file_name 
    this.imageService.uploadImage($event, name)
  }

}
