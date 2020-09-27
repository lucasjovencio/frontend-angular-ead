import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpService) { }

  list(data:any = {})
  {
    return this.http.get('cursos',data);
  }

  get(id)
  {
    return this.http.get(`cursos/${id}`);
  }

  save(data:any){
    return this.http.post('cursos', data);
  }

  select(data:any = {}){
    return this.http.get('cursos/select',data);
  }

}
