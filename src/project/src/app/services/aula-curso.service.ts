import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AulaCursoService {

  constructor(private http: HttpService) { }


  curso(id:number,data:any={}){
    return this.http.get(`aula-cursos/curso/${id}`,data);
  }

  save(data:any){
    return this.http.post('aula-cursos', data);
  }
}
