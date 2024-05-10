# Ejercicio 6 – Teoría de componentes.

## 1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.

Los estilos de un componente se pueden encapsular dentro del elemento host del componente para que no afecten al resto de la aplicación. El decorador del componente proporciona la opción de encapsulación que se puede usar para controlar  los estilos CSS de un componente para que solo afecten a ese componente específico, evitando conflictos con otros componentes o estilos globales. 

Angular ofrece varias opciones de encapsulación:

**Emulated:**

Angular modifica los selectores de CSS del componente para que solo se apliquen a la vista del componente y no afecten a otros elementos de la aplicación.

*Ej: Solo se aplican los estilos a los elementos dentro del componente y no afectan otros componentes.*

```text
@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }
```


**Shadow DOM:**

Angular usa la API Shadow DOM integrada del navegador para encerrar la vista del componente dentro de un ShadowRoot (usado como elemento host del componente) y aplicar los estilos provistos de manera aislada. Sin embargo, el soporte para Shadow DOM puede ser inconsistente en algunos navegadores.

*Ej: Los estilos se aplican dentro de la burbuja del Shadow DOM y aislados del DOM principal.*

```text
@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }
```

**None:**

Angular no aplica ningún tipo de encapsulación de vista, lo que significa que cualquier estilo especificado para el componente se aplica globalmente y puede afectar cualquier elemento HTML presente dentro de la aplicación. 

Ej: Los estilos se aplican a nivel global en toda la aplicación.

```text
@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent { }
```

## 2. ¿Qué es el shadow DOM?

El concepto de Shadow DOM nace de la necesidad de tener una forma de encapsular elementos y mantenerlos aislados del resto de la aplicación

En realidad, es como si el árbol DOM de la aplicación tuviera una elemento sombra *Shadow DOM*, en el cuál puede residir otro árbol DOM  que no forma parte del DOM principal. Esta característica nos permite aislar los estilos de modo que no afecten a los elementos que están fuera del Shadow DOM, ni tampoco el CSS de fuera afecte a los elementos del propio Shadow DOM.

```text
const div = document.createElement("div");
const shadow = div.attachShadow({ mode: "open" });
```

La opción **mode** del método *.attachShadow()* define el modo de encapsulación que queremos que tenga el Shadow DOM. Existen dos modos de encapsulación:

  **Modo Abierto (open)**: el elemento en el que creamos el Shadow DOM tendrá una propiedad .shadowRoot por la cuál se puede acceder al  del elemento, y a partir de ahí, al árbol DOM que contiene
  

```text
const div = document.createElement("div");
const shadow = div.attachShadow({ mode: "open" });

div.shadowRoot === shadow; 
```

**Modo Cerrado (closed)**: la propiedad .shadowRoot del elemento nos devolverá , siendo imposible acceder al árbol DOM que contiene.

```text
const div = document.createElement("div");
const shadow = div.attachShadow({ mode: "closed" });

div.shadowRoot === null; 
```

## 3. ¿Qué es el changeDetection?

Angular tiene una mecanismo denominado ChangeDetector para detectar inconsistencias (cambios), entre el estado del component y la vista. Con el objetivo de optimizar el rendimiento de la aplicación.

## 4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.

Existen dos formas de detección de cambios *Default y OnPush*:

**Default**

Realiza comparaciones en todas las variables referenciadas en el template, tanto por referencia como por valor en todos los componentes de la aplicación.

- *Ventajas*

    Realiza comparaciones en todas las variables referenciadas en el template, tanto por referencia como por valor (incluso en objetos muy profundos), en todos los componentes de la aplicación.

- *Desventajas*

    Las comparaciones por valor, son muy costosas en cuanto a consumo de CPU- Y es un cálculo que se ejecutará con cualquier cambio detectado, tenga o no tenga que ver con nuestro componente.

- *¿Cuanto utilizar?*
  
  En aplicaciones pequeñas y que es aceptable que se manejen automáticamente la detección de cambios.

**OnPush**

Solo realiza comparaciones si se detecta cambios en la referencia de los parámetros @Input del componente. 


```text
@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
 
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShadowDomEncapsulationComponent { }
```

- *Ventaja*

    Mejora el rendimiento de la aplicación al reducir el número de veces que Angular realiza una detección de cambios.

- *Desventaja*

    Se debe prestar atención si los componentes reciben bien los valores a través de eventos para desencadenar la detección de cambios. Si no se procede esta manera los valores no cambiaran hasta que se vuelva a renderizar la vista.

- *¿Cuanto utilizar?*

    En aplicaciones grandes, con muchos componentes y controlar la detección de cambios de forma manual en cada uno de los componentes mediante *@input*.

## 5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados

### **Lifecycle Angular**

Angular crea los componentes, los renderiza, crea y renderiza a sus hijos, actualiza y re-renderiza los componentes cuando detecta cambios y finalmente los destruye antes de eliminarlos de la faz de la tierra del DOM.

Para controlar todos esos cambios se utilizar el ciclo de vida de los componentes en momentos clave de su vida a través de unos callbacks, los denominados *lifecycle hooks.*

El punto de partida de un componente (su creación), es el momento en que Angular llama a su constructor.

A partir de este momento se empiezan a llamar los **lifecycle hooks ** del component.

### **Hooks o eventos principales en Angular**

Estos hooks son métodos que se pueden implementar en la clase del componente para realizar acciones cuando se producen estos eventos. 

**ngOnChanges():**

Este hook se llama al inicio y cada vez que Angular detecta un cambio en los inputs del componente (cuando tienes algún property binding). Recibe como parámetro un objeto SimpleChanges, con los valores actuales y anteriores (si había) de los inputs y permite responder a los cambios en los datos que recibe el componente

**ngOnInit():** 

Este hook te permite inicializar el componente una vez ha recibido las propiedades de entrada. Se dispara solo una vez, justo después de que Angular haya creado e inicializado las propiedades del componente. Es útil para cargar la data de un servicio rest, por ejemplo.

**ngDoCheck():**

Sirve para detectar y actuar sobre cambios que Angular no va a detectar por si mismo. Se llama también durante cada ciclo de detección de cambios, después de ngOnChanges() y ngOnInit(). Es utulizado para realizar comprobaciones manuales y específicas de propiedades del compenente o elemento de la page.

**ngAfterContentChecked():** 

Se ejecuta después de que Angular compruebe el contenido proyectado en el componente. Se ejecuta también durante los ciclos de detección de cambios, después de ngDoCheck(), AfterContentInit() y antes de AfterViewInit(). Se puede utilizar para comprobar realizar comprobacioes de cambio en el contenido.

**ngAfterContentInit():** 

Se ejecuta una sola vez, justo después de que Angular proyecte contenido externo en la vista del componente (con ng-content).Esto ocurre antes de que se inicialice la vista del componente. Permite realizar acciones relacionadas con el contenido del componente.


**ngAfterViewInit():** 

Se llama una única vez, tras inicializar las vistas y sub-vistas del componente. Permite realizar acciones como acceder a elementos de la vista o realizar otras operaciones de manipulación del DOM

**ngAfterViewChecked():**

Se llama después de comprobar los cambios de las vistas y sub-vistas del componente. Se ejecuta también durante el ciclo de detección de cambios, después de ngAfterContentChecked().

**ngOnDestroy():**

Se llama solo una vez, justo antes de que Angular destruya el componente, y sirve para prevenir memory leaks, eliminando por ejemplo suscripciones a Observables e event handlers. Es muy útiil para resetear parametros o detener eventos.
