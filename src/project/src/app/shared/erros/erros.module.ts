import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosComponent } from './erros.component';



@NgModule({
  declarations: [ErrosComponent],
  imports: [
    CommonModule
  ],
  exports:[ErrosComponent]
})
export class ErrosModule { }
