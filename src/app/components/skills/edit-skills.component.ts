import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ImageService } from 'src/app/service/image.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  skills: Skills = null;

  constructor(private skillsService: SkillsService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data => {
        this.skills = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.skill_image_url = this.imageService.url
    this.skillsService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "foto_skill_" + id 
    this.imageService.uploadImage($event, name)
  }

}
