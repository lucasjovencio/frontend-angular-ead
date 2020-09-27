import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from 'app/services/aula.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  public obj:any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aulaService:AulaService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
			if (params && params.id) {
        this.get(params.id)
			} else {
				this.router.navigate(['/aulas']);
			}
		});
  }

  get(id){
    this.aulaService.get(id).subscribe(res=>{
      this.obj = res
    },error=>{
      console.log(error)
    })
  }

}
