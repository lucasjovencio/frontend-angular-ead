import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    visible:boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/usuarios', title: 'Usuários',  icon: 'person', class: '',visible:true },
    { path: '/usuarios/usuario', title: 'Usuário',  icon: 'person', class: '',visible:false },
    { path: '/aulas', title: 'Aulas',  icon:'library_books', class: '' ,visible:true},
    { path: '/aulas/aula', title: 'Aula',  icon:'library_books', class: '' ,visible:false},
    { path: '/cursos', title: 'Cursos',  icon:'content_paste', class: '' ,visible:true},
    { path: '/cursos/curso', title: 'Curso',  icon:'content_paste', class: '' ,visible:false},
    { path: '/turmas', title: 'Turmas',  icon:'bubble_chart', class: '' ,visible:true},
    { path: '/turmas/turma', title: 'Turma',  icon:'bubble_chart', class: '' ,visible:false},
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '',visible:true },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' ,visible:true},
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '',visible:true },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '',visible:true },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
