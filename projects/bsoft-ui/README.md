# README.md – Biblioteca BSoft UI

## 📘 Descripción
BSoft UI es una librería Angular de componentes reutilizables para estandarizar la interfaz de usuario en proyectos Angular. Incluye componentes como tablas, campos de texto, listas desplegables y gráficos, agrupados en el módulo principal `BsoftUiModule`. El proyecto contiene una aplicación demo (`demo-bsoft`) para visualizar y probar los componentes de forma interactiva.

---

## 🚀 Requisitos previos
Asegúrate de tener instaladas las siguientes versiones o superiores:
- Node.js: v20.x
- npm: v10.x
- Angular CLI: v18.x (o superior)

Verifica con:
```bash
node -v
npm -v
ng version
```

---

## 🛠️ Instalación de dependencias
En la raíz del proyecto:
```bash
npm install
```
Si hay conflictos entre dependencias:
```bash
npm install --legacy-peer-deps
```

---

## 🧩 Componentes incluidos

| Componente      | Descripción                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| **DataTable**   | Muestra datos en formato tabla con selección, ordenamiento y paginación.                |
| **TextField**   | Campo de texto controlado, ideal para formularios reactivos.                            |
| **SelectList**  | Lista desplegable configurable (selección única o múltiple).                             |
| **ChartWidget** | Componente de visualización gráfica (barras, líneas, pastel).                           |

---

## ⚙️ Comandos principales

- Compilar la librería:
```bash
ng build bsoft-ui
```
Genera `dist/bsoft-ui`.

- Ejecutar la aplicación demo:
```bash
ng serve demo-bsoft
```
Abrir: http://localhost:4200

- Ver cambios en la demo mientras se desarrolla:
En una terminal:
```bash
ng build bsoft-ui --watch
```
En otra:
```bash
ng serve demo-bsoft
```

---

## 📦 Publicar / Usar la librería en otro proyecto
## ASEGURATE DE SUBIR LA VERSION EL PACKEGE.JSON ANTES DE COMPILAR

1. Construir el paquete:
```bash
ng build bsoft-ui
cd dist/bsoft-ui
npm pack
npm publish # estar dentro de esta ruta cd dist/bsoft-ui
npm version patch #version
```
Genera `bsoft-ui-<version>.tgz`.

2. Instalar en otro proyecto:
```bash
npm install library-bsoft-ui --legacy-peer-deps

```

3. Importar en el módulo (ejemplo `app.module.ts`):
Y luego importarla así (si es standalone, mejor aún 👇):
```ts


import { TextField } from 'library-bsoft-ui';
import { SelectList } from 'library-bsoft-ui';
import { DataTable } from 'library-bsoft-ui';
import { ChartWidget } from 'library-bsoft-ui';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TextField,SelectList,DataTable,ChartWidget],
  })
export class AppModule {}
```

4. Usar componentes en plantillas:
```html
<lib-text-field
  [label]="'Nombre'"
  [value]="nombre"
  [required]="true"
  (valueChange)="nombre = $event"
></lib-text-field>


<lib-select-list
  [label]="'Tipo de Fuente'"
  [options]="listaFuentes"
  [value]="fuenteSeleccionada"
  (valueChange)="fuenteSeleccionadaS($event)"
  [required]="true"
></lib-select-list>

<lib-data-table
  [data]="usuarios"
  [columns]="[
    { key: 'nombre', label: 'Nombre' },
    { key: 'correo', label: 'Correo' },
    { key: 'rol', label: 'Rol' }
  ]"
  [pageSize]="5"
  [showCheckbox]="true"
  selectionMode="multiple"
  (change)="onSeleccion($event)"
></lib-data-table>

```

---

## 🧹 Reiniciar el entorno (solución de errores)
```bash
rm -rf node_modules dist
npm install
ng build bsoft-ui
ng serve demo-bsoft
```

---

## 💡 Flujo de desarrollo recomendado
- Terminal A:
```bash
ng build bsoft-ui --watch
```
- Terminal B:
```bash
ng serve demo-bsoft
```
Permite ver cambios en caliente en la demo mientras se editan componentes.

---

## 🧾 Notas finales
- Exporta todos los componentes públicos en `projects/bsoft-ui/src/public-api.ts`.
- `demo-bsoft` es para pruebas internas; no se publica junto a la librería.
- Se recomienda usar `standalone: true` en componentes para compatibilidad con Angular moderno.
