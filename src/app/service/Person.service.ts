import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/Person.mode';


@Injectable({
  providedIn: 'root'
})

export class PersonService {
  URL = 'https://backendsng.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.URL + `detail/${id}`);
  }

  public update(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }


}
