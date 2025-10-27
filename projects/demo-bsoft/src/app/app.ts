import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BsoftUiModule } from '../../../bsoft-ui/src/lib/bsoft-ui.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BsoftUiModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-bsoft');
  listaFuentes = [
  { value: '1', label: 'Superficial' },
  { value: '2', label: 'Subterránea' },
];

fuenteSeleccionada: any = null;
nombre = '';
usuarios = [
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
  { nombre: 'Kevin', correo: 'kevin@mail.com', rol: 'Admin' },
  { nombre: 'Laura', correo: 'laura@mail.com', rol: 'User' },
  { nombre: 'Pedro', correo: 'pedro@mail.com', rol: 'Editor' },
];

onSeleccion(rows: any[]) {
  console.log('Seleccionados:', rows);
}



fuenteSeleccionadaS(text: any) {
  console.log({text});
}

}
