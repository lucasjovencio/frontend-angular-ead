import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpService) { }

  list(data:any = {})
  {
    return this.http.get('turmas',data);
  }

  get(id)
  {
    return this.http.get(`turmas/${id}`);
  }

  save(data:any){
    return this.http.post('turmas', data);
  }

}
