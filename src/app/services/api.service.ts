import { Injectable } from '@angular/core';

import { Produto } from '../Produtos';

import { environment } from 'src/environments/environment';

import {
  HttpClient, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseApiUrl}produtos`)
  }

  createProduto(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.baseApiUrl}produtos`, formData);
  }

  deleteOne(id: number) {
    return this.http.delete<Produto>(`${this.apiUrl}produtos/${id}`);
  }
};
