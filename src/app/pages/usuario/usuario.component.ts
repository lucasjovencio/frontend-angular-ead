import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuario:any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
			if (params && params.id) {
        this.getUsuario(params.id)
			} else {
				this.router.navigate(['/usuarios']);
			}
		});
  }

  getUsuario(id){
    this.userService.get(id).subscribe(res=>{
      this.usuario = res
    },error=>{
      console.log(error)
    })
  }

}
