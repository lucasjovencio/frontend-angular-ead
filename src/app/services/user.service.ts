import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  list(data:any = {})
  {
    return this.http.get('users',data);
  }

  get(id)
  {
    return this.http.get(`users/${id}`);
  }

  save(data:any){
    return this.http.postVanilla('users', data);
  }

  select(data:any = {}){
    return this.http.get('users/select',data);
  }
}
