import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Search } from '../Search Fun/searchinterface';


@Injectable({
  providedIn: 'root'
})
export class SearchfunService {

  url = 'http://localhost:3000/comments ';
  private baseURL = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private http : HttpClient) { }

  getSearches():Observable<Search[]>{
    return this.http.get<Search[]>(this.url)
  }
  getData(){
    return this.http.get(this.baseURL);
  }
}
