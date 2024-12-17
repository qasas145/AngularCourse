import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class dataService {
  names : string[] = ["Muhamad elsayed elqassa", "osman mohamed", "sayed elqasa"];
  constructor(private _client : HttpClient) { 
    
  }

  getPosts() : Observable<any> {
    return this._client.get("https://jsonplaceholder.typicode.com/posts");
  }
}
