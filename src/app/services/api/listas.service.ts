import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  url:string="http://localhost:8091/api/quipux/";

  constructor(http: HttpClient) {
  }
}
