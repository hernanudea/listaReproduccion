import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ListaReproduccionModel} from "../../models/listaReproduccionModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  url: string = "http://localhost:8091/api/quipux/";

  constructor(private http: HttpClient) {
  }

  getAllList(): Observable<ListaReproduccionModel[]> {
    let dir = this.url + "lists";
    return this.http.get<ListaReproduccionModel[]>(dir);

  }
}
