import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { endpointArray } from '../models/endpoint';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';

  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomEndpoint() {
    return endpointArray[this.getRandomInteger(0, endpointArray.length - 1)];
  }

  getTopTranding(): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseUrl}${this.getRandomEndpoint()}`, {
      params: {
        api_key: this.apiKey,
        language: 'pt-BR',
      },
    });
  }

  getDataSlider(endpoint: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseUrl}${endpoint}`, {
      params: {
        api_key: this.apiKey,
        language: 'pt-BR',
      },
    });
  }
}
