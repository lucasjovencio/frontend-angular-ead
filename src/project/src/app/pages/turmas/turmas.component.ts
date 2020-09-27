import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CursoService } from 'app/services/curso.service';
import { TurmaService } from 'app/services/turma.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  public data:any = [];
  public form: FormGroup;
  public prev:any=false;
  public next:any=false;
  public errosForm:any = [];
  public cursos:any=[];

  constructor(
    private turmaService:TurmaService,
    private cursoService:CursoService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
			cursos_id: ['', Validators.required],
			turno: ['', Validators.required],
			nome: ['', Validators.required],
    });
    this.list();
    this.getCursos();
  }

  open(obj:any){
    let navigationExtras: NavigationExtras = {
			queryParams: {
				id: obj.id
			}
		};
    this.router.navigate(['/turmas/turma'], navigationExtras);
  }
  
  list(params:any={}){
    this.turmaService.list(params).subscribe(res=>{
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
    this.turmaService.save(this.form.getRawValue()).subscribe(res=>{
      this.form.patchValue({cursos_id:'',turno:'',nome:''});
      this.list();
      alert('Turma criada com sucesso!')
    },error=>{
      if(error.status === 422){
        this.errosForm = error.error.error
      }
    })
  }

  getCursos(){
    this.cursoService.select().subscribe(res=>{
      this.cursos = res.data;
    },error=>{
    })
  }

}
