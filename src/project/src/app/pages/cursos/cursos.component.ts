import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AulaService } from 'app/services/aula.service';
import { CursoService } from 'app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public data:any = [];
  public form: FormGroup;
  public prev:any=false;
  public next:any=false;
  public errosForm:any = [];

  constructor(
    private cursoService:CursoService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			descricao: ['', Validators.required],
    });
    this.list();
  }

  open(obj:any){
    let navigationExtras: NavigationExtras = {
			queryParams: {
				id: obj.id
			}
		};
    this.router.navigate(['/cursos/curso'], navigationExtras);
  }
  
  list(params:any={}){
    this.cursoService.list(params).subscribe(res=>{
      this.data = res.data
      if(res.pagination.last_page_url){
        this.prev=res.current_page-1;
      }else{
        this.prev=false;
      }
      if(res.pagination.next_page_url){
        this.next=res.current_page+1;
      }else{
        this.next=false;
      }
    },error=>{
      console.log(error)
    })
  }

  getPrev(){
    this.list({page:this.prev});
    return false;
  }

  getNext(){
    this.list({page:this.next});
    return false;
  }

  save(){
    this.errosForm = [];
    this.cursoService.save(this.form.getRawValue()).subscribe(res=>{
      this.form.patchValue({nome:'',descricao:''});
      this.list();
      alert('Curso criada com sucesso!')
    },error=>{
      if(error.status === 422){
        this.errosForm = error.error.error
      }
    })
  }

}
