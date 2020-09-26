import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpService) { }

  list(data:any = {})
  {
    return this.http.get('aulas',data);
  }

  get(id)
  {
    return this.http.get(`aulas/${id}`);
  }

  save(data:any){
    return this.http.post('aulas', data);
  }

  select(data:any = {}){
    return this.http.get('aulas/select',data);
  }

}
