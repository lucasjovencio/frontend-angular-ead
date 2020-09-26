import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public data:any = [];
  public form: FormGroup;
  public foto:any="./assets/img/faces/user.png";
  public fotoFile:any;
  public errosForm:any = [];
  public prev:any=false;
  public next:any=false;
  constructor(
    private userService:UserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			sobrenome: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      imagem: [],
    });
    this.list();
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
    const form = new FormData;
    form.append('nome',this.form.getRawValue().nome);
		form.append('sobrenome',this.form.getRawValue().sobrenome);
		form.append('imagem',this.fotoFile);
    form.append('cpfcnpj',this.form.getRawValue().cpfcnpj);
    form.append('email',this.form.getRawValue().email);
    form.append('password',this.form.getRawValue().password);
    form.append('password_confirmation',this.form.getRawValue().password_confirmation);

    this.userService.save(form).subscribe(res=>{
      this.list();
      alert('Usuario criado com sucesso!')
      this.form.patchValue({nome:'',sobrenome:'',cpfcnpj:'',email:'',password:'',password_confirmation:'',imagem:null});
      this.foto = "./assets/img/faces/user.png";
      this.fotoFile=null;
    },error=>{
      if(error.status === 422){
        this.errosForm = error.error.error
      }
    })
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.form.patchValue({imagem:file})
        this.fotoFile = file;
        const reader = new FileReader();
        reader.onload = e => this.foto = reader.result;
        reader.readAsDataURL(file);
    }
  }


  list(params:any={}){
    this.userService.list(params).subscribe(res=>{
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
}
