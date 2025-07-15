import { Component } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import { CURSOS } from '../../shared/data/cursos.data';
import { Router } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [NgFor, NgClass],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = CURSOS;
  darkMode = false;

  constructor(private router: Router) {}

  verDetalleCurso(id: number) {
    this.router.navigate(['/detalleCurso', id]);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  getCursoClass(nombre: string): string {
    const tipo = nombre.toLowerCase();
    if (tipo.includes('html')) return 'card-html';
    if (tipo.includes('css')) return 'card-css';
    if (tipo.includes('javascript')) return 'card-js';
    return 'card-default';
  }
}
