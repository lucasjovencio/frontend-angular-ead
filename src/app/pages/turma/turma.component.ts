import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TurmaService } from 'app/services/turma.service';
import { UserTurmaService } from 'app/services/user-turma.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  public data:any = [];
  public form: FormGroup;
  public prev:any=false;
  public next:any=false;
  public errosForm:any = [];
  public participantes:any=[];
  public obj:any = {
    curso:{}
  }
  private id:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private turmaService:TurmaService,
    private userTurmaService:UserTurmaService,
    private userService:UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
			turmas_id: ['', Validators.required],
			users_id: ['', Validators.required],
			tipo: ['', Validators.required],
    });
    this.route.queryParams.subscribe(async params => {
			if (params && params.id) {
        this.get(params.id)
        this.id=params.id;
        this.form.patchValue({turmas_id:params.id});
        this.list();
        this.getParticipantes();
			} else {
				this.router.navigate(['/cursos']);
			}
    });
    
  }

  get(id){
    this.turmaService.get(id).subscribe(res=>{
      this.obj = res
    },error=>{
      console.log(error)
    })
  }

  getParticipantes(){
    this.userService.select().subscribe(res=>{
      this.participantes = res.data;
    },error=>{
      if(error.status === 422){
        this.errosForm = error.error.error
      }
    })
  }

  list(params:any={}){
    this.userTurmaService.turma(this.id,params).subscribe(res=>{
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
      this.router.navigate(['/usuarios/usuario'], navigationExtras);
    }

    save(){
      this.errosForm = [];
      this.userTurmaService.save(this.form.getRawValue()).subscribe(res=>{
        this.form.patchValue({users_id:'',tipo:''});
        this.list();
        alert('Participante vinculado com sucesso!')
      },error=>{
        if(error.status === 422){
          this.errosForm = error.error.error
        }
      })
    }

}
