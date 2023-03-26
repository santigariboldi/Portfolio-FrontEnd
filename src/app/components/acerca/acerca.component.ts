import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person.mode';
import { PersonService } from 'src/app/service/Person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit{
  Person: Person = null;

  constructor(public PersonService: PersonService, private tokenService: TokenService) {}
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarPersona()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.PersonService.detail(1).subscribe(data =>
      {this.Person = data})
  }
}
