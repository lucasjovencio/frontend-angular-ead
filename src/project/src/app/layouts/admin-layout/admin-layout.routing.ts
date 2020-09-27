import { Routes } from '@angular/router';

import { UsuariosComponent } from 'app/pages/usuarios/usuarios.component';
import { UsuarioComponent } from 'app/pages/usuario/usuario.component';
import { AulasComponent } from 'app/pages/aulas/aulas.component';
import { AulaComponent } from 'app/pages/aula/aula.component';
import { CursosComponent } from 'app/pages/cursos/cursos.component';
import { CursoComponent } from 'app/pages/curso/curso.component';
import { TurmasComponent } from 'app/pages/turmas/turmas.component';
import { TurmaComponent } from 'app/pages/turma/turma.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'usuarios',       component: UsuariosComponent },
    { path: 'usuarios/usuario',        component: UsuarioComponent },
    { path: 'aulas',   component: AulasComponent },
    { path: 'aulas/aula',   component: AulaComponent },
    { path: 'cursos',   component: CursosComponent },
    { path: 'cursos/curso',   component: CursoComponent },
    { path: 'turmas',   component: TurmasComponent },
    { path: 'turmas/turma',   component: TurmaComponent },
];
