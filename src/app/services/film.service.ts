import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmCreateData } from '../interfaces/dto/film-create-data';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  private apiURLFilms: string = environment.apiURLFilms;
  

  findAll(){
    return this.http.get(`${this.apiURLFilms}?token=${this.cookies.get('token')}`)
  }

  findById(id:string){
    return this.http.get(`${this.apiURLFilms}/${id}?token=${this.cookies.get('token')}`)
  }

  insert(data: FilmCreateData){
    return this.http.post(`${this.apiURLFilms}?token=${this.cookies.get('token')}`, data)
  }

  deleteOne(id: string){
    return this.http.delete(`${this.apiURLFilms}/${id}?token=${this.cookies.get('token')}`)
  }
}
