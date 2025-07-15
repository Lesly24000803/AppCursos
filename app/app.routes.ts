import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Cursos } from './pages/cursos/cursos';
import { NotFound } from './core/not-found/not-found';
import { DetalleCurso } from './pages/cursos/detalle-curso/detalle-curso';

export const routes: Routes = [
    {
        path: '', component: Inicio
    },
    {
        path: 'inicio', component: Inicio
   },
    {
        path: 'cursos', component: Cursos
    },
    {
        path: 'detalleCurso/:id', component: DetalleCurso
    },
    {
        path: '**', component: NotFound 
    }

];
