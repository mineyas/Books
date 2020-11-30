import { HeaderComponent } from './../header/header.component';
import { Livre } from './../models/livre.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const API_URL = environment.apiUrl;
const headers = new HttpHeaders().set("Content-Type", "application/json")


@Injectable({
  providedIn: 'root'
})
export class LivreApiService {

  constructor(private http: HttpClient) { }

  createLivre(livre: Livre): Observable<any>{
    let body = JSON.stringify(livre);
    alert(livre)
    return this.http.post(API_URL + '/livres', body, {headers}).pipe( catchError(this.handleError))
  }

  getLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(API_URL + '/livres', {headers}).pipe(catchError(this.handleError))
  }

  getLivreById(livreId: string):Observable<Livre>{
    return this.http.get<Livre>(API_URL + '/livres' + livreId, {headers}).pipe(catchError(this.handleError))
  }

  updateLivre(livre: Livre):Observable<any>{
    return this.http.put(API_URL + '/livres' + livre.id, livre, {headers}).pipe(catchError(this.handleError))
  }

  deleteLivre(livreId: string):Observable<any>{
    return this.http.delete(API_URL + '/livres' + livreId, {headers}).pipe(catchError(this.handleError))
  }




  private handleError(error: Response | any){
    return throwError(error)
  }
}
