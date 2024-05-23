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

  private apiURL: string = environment.apiURL;
  

  findAll(){
    return this.http.get(`${this.apiURL}?token=${this.cookies.get('token')}`)
  }

  findById(id:string){
    return this.http.get(`${this.apiURL}/${id}?token=${this.cookies.get('token')}`)
  }

  insert(data: FilmCreateData){
    return this.http.post(`${this.apiURL}?token=${this.cookies.get('token')}`, data)
  }

  deleteOne(id: string){
    return this.http.delete(`${this.apiURL}/${id}?token=${this.cookies.get('token')}`)
  }
}
