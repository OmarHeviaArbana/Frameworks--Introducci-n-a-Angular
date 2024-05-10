# **Desarrollo front-end con framew. JavaScript - Aula 2**

## PEC 4

```text
Introducción a Angular
```

## Login UOC

```text
ohevia@uoc.edu
```

## Nombre y apellidos  

```text
Omar Hevia Arbana
```

## Comentarios

- Angular CLI requiere una versión minima Node.js v18.13.

- Debido a la nueva versión de Angular 17 y que ya no se basa en la utilización de modulos, caractarística fundamental de las versiones anteriores de Angular, para la creación de nuestro proyecto debemos incluir el --standalone false. Y en la opción de configuración Server-Side Rendering (SSR) debemos evitarla para trabajar de la forma tradicional. Cosa que creo que para iniciar el camino en Angular es lo correcto.

```text
ng new angular-ecommerce --standalone false
```

- Durante la creación del proyecto se nos realizan una serie de preguntas. Una de ellas tiene que ver con habilitar el uso de SSR (Server Side Rendering). Ante esta disyuntiva lei diferentes recursos acerca de qué utilzar, SSR o el tradicional CSR (Client Side Rendering). Pues bien, para este proyecto al tener un alcance limitado se utiliza CSR. Siendo consciente de que un proyecto de largo alcance y que haya desplegar en producción es conveniente, con la versión 17 de angular, utlizar SSR.
  
- Los problemas que puede dar CSR (Client Side Rendering) radica basicamente en que requiere JS y si por algún caso el usuario utlizará un navegador que no corriera JS, al cargar la página Se vería un hoja de hmtl en blanco. Otro problema puede ser que los motores de búsqueda como bing no utilizan JS por lo que nuestro sitio web puede dar algunos problemas de ralentización de carga. Además, el timepo . o SSR

```text
ng g c article-item
```

- El módulo **CommonModule** de Angular proporciona muchas directivas comunes, incluido ngClass. Debes asegurarte de importar CommonModule en el módulo donde está declarado tu componente.

- Para usar templates y estilos en línea en el componente utilizando Angular CLI se debe utilizar el siguiente comando

*Versiones de Angular < 17*

```text
ng generate component article-list --inlineTemplate --inlineStyle
```

*Angular 17*

```text
ng generate component article-list --inline-template --inline-style

```

- Para utilizar la directiva ngModel en un componente, es necesario importar FormsModule app.module:
  
```text  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
