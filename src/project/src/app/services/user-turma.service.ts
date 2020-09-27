import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserTurmaService {

  constructor(private http: HttpService) { }

  turma(id:number,data:any={}){
    return this.http.get(`user-turmas/turma/${id}`,data);
  }

  save(data:any){
    return this.http.post('user-turmas', data);
  }

}
