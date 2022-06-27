import { Injectable } from '@angular/core';

import { Produto } from '../Produtos';

import {
  HttpClient, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private apiUrl = 'http://localhost:2700/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}produtos`)
  }
};
