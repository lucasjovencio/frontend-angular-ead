import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AulaCursoService } from 'app/services/aula-curso.service';
import { AulaService } from 'app/services/aula.service';
import { CursoService } from 'app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  public data:any = [];
  public form: FormGroup;
  public prev:any=false;
  public next:any=false;
  public errosForm:any = [];
  public obj:any = {}
  private id:number;
  public aulas:any=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService:CursoService,
    private aulaCursoService:AulaCursoService,
    private formBuilder: FormBuilder,
    private aulaService:AulaService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
			cursos_id: ['', Validators.required],
			aulas_id: ['', Validators.required],
    });
    this.route.queryParams.subscribe(async params => {
			if (params && params.id) {
        this.get(params.id)
        this.id=params.id;
        this.form.patchValue({cursos_id:params.id});
        this.list();
        this.getAulas();
			} else {
				this.router.navigate(['/cursos']);
			}
		});
  }

  getAulas(){
    this.aulaService.select().subscribe(res=>{
      this.aulas = res.data;
    },error=>{
    })
  }

  get(id){
    this.cursoService.get(id).subscribe(res=>{
      this.obj = res
    },error=>{
      console.log(error)
    })
  }


  list(params:any={}){
    this.aulaCursoService.curso(this.id,params).subscribe(res=>{
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

    open(obj:any){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          id: obj.id
        }
      };
      this.router.navigate(['/aulas/aula'], navigationExtras);
    }

    save(){
      this.errosForm = [];
      this.aulaCursoService.save(this.form.getRawValue()).subscribe(res=>{
        this.form.patchValue({aulas_id:''});
        this.list();
        alert('Aula vinculado com sucesso!')
      },error=>{
        if(error.status === 422){
          this.errosForm = error.error.error
        }
      })
    }
}
