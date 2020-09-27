import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CpfcnpjPipe } from './pipes/cpfcnpj.pipe';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ErrosModule } from './shared/erros/erros.module';
import { AulasComponent } from './pages/aulas/aulas.component';
import { AulaComponent } from './pages/aula/aula.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { TurmaComponent } from './pages/turma/turma.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ErrosModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UsuariosComponent,
    CpfcnpjPipe,
    UsuarioComponent,
    AulasComponent,
    AulaComponent,
    CursoComponent,
    CursosComponent,
    TurmasComponent,
    TurmaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
