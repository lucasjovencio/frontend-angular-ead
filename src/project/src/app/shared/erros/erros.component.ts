import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-erros',
  templateUrl: './erros.component.html',
  styleUrls: ['./erros.component.css']
})
export class ErrosComponent implements OnInit {
  @Input() erros:any=[]
  public errosList=[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const self = this;
    self.errosList=[];
		if (changes.erros && changes.erros.previousValue) {
      let erros = changes.erros.currentValue;
      Object.values(erros).forEach(function(items:any){
        items.forEach(function(item:any){
          self.errosList.push(item);
        })
      });
		}
	}
}
