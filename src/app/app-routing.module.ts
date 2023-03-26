import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca/edit-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path:'newskill',component:NewSkillsComponent},
  {path:'editskill/:id',component:EditSkillsComponent},
  {path:'editacercade/:id',component:EditAcercaDeComponent},
  {path:'nuevoproyecto', component:NewproyectoComponent},
  {path:'editproyecto/:id', component:EditproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
