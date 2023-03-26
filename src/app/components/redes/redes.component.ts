import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person.mode';
import { TokenService } from 'src/app/service/token.service';
import { PersonService } from 'src/app/service/Person.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService, public PersonService: PersonService) {}
  Person: Person = null;

  ngOnInit(): void {     
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  cargarPersona(){
    this.PersonService.detail(1).subscribe(data =>
      {this.Person = data})
  }
}
