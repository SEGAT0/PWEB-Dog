import { dogInterface } from './interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DogServices {

  constructor(private http: HttpClient) { }

  private dogUrl= 'https://dog.ceo/api/breeds/image/random'

    getDog(): Observable<dogInterface>{
      return this.http.get<dogInterface>(this.dogUrl)
    }
}