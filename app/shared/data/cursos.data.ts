import { Curso } from "../models/curso.model";

export const CURSOS: Curso[] = [
  {
    id: 1,
    nombre: 'HTML5',
    nivel: 'Avanzado',
    descripcion: 'Estructura de los sitios web con lenguaje de etiquetas',
    imagen: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    precio: 'Q.100',
    contenido: ['Etiquetas básicas', 'Formularios', 'Multimedia', 'Semántica']
  },
  {
    id: 2,
    nombre: 'CSS3',
    nivel: 'Principiante',
    descripcion: 'Aplica estilos a la estructura de los sitios web',
    imagen: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    precio: 'Q.100',
    contenido: ['Selectores', 'Colores', 'Fuentes', 'Box Model']
  },
  {
    id: 3,
    nombre: 'JavaScript',
    nivel: 'Intermedio',
    descripcion: 'Manipulación del DOM y eventos',
    imagen: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    precio: 'Q.200',
    contenido: ['Eventos', 'DOM', 'Funciones', 'Condicionales']
  }
];
