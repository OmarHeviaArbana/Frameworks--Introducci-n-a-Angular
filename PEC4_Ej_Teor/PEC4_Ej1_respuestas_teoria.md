# Ejercicio 1 – Instalación y configuración de Angular CLI

## Instalación Angular CLI 

```
npm install -g @angular/cli
```

## ¿Qué es Angular CLI?

La Angular CLI es una herramienta de interfaz de línea de comandos que se utiliza para inicializar, desarrollar, estructurar y mantener aplicaciones Angular directamente desde una consola de comandos.

## Explicación de cada una de las siguientes opciones de Angular CLI.

- **ng new**: Crea un nuevo proyecto de Angular con la estructura de directorios y archivos básicos para comenzar a desarrollar una aplicación Angular. Por defecto, los archivos se ubican en la subcarpeta src/. También es posible especificar diferentes opciones como el nombre del proyecto, el estilo de los archivos CSS, o si quieres incluir un sistema de control de versiones como Git desde el principio.
  
- **ng generate**: Esta opción permite generar varios tipos de entidades en tu proyecto de Angular. Puede ser utilizada para crear componentes, directivas, servicios, etc. a través de subcomandos. Por ejemplo:

  - **ng generate component**: Crea un nuevo componente Angular. Puedes especificar el nombre del componente y otras opciones como la ubicación en el proyecto.
  
  - **ng generate directive**: Crea una nueva directiva, que es una clase que contiene lógica  y puede modificar o enriquecer el comportamiento de los elementos en el DOM
  
  - **ng generate enum**: Crea un nuevo enum (enumeración) , que es una colección de constantes con nombres asociados. Cada constante dentro del enum tiene un nombre simbólico y un valor numérico implícito, aunque también se puede asignar explícitamente un valor a cada constante.
  
  - **ng generate guard**: Crea un nuevo guard . Un guard es una función o clase que se utiliza para controlar el acceso a una ruta en una aplicación Angular. Sirven para determinar si se permite o se deniega el acceso a una ruta específica, y pueden ayudar a proteger partes de la aplicación o a gestionar cómo se navega entre diferentes rutas.

  - **ng generate interface**: Crea una nueva interfaz y sirven para definir la estructura de objetos y se utilizan para garantizar tipos consistentes en tu código.
  
  - **ng generate pipe:** Crea un nuevo pipe, que es una función que toma un valor de entrada y lo transforma en un valor de salida basado en alguna lógica específica. Los pipes se utilizan comúnmente en las plantillas para formatear datos o realizar transformaciones de datos de una manera declarativa.
 
  - **ng generate service**: Crea un nuevo servicio . Los servicios son objetos inyectables que contienen lógica reutilizable para tu aplicación. Los servicios son una parte fundamental de la arquitectura de Angular, ya que ayudan a mantener el código modular y separado en función de sus responsabilidades.
  
- **ng serve**: Compila y ejecuta tu aplicación Angular en local, normalmente en un servidor de desarrollo en http://localhost:4200. Cualquier cambio en los archivos de tu proyecto se refleja automáticamente en el navegador mientras ng serve se esté ejecutando.
  
- **ng test**: Ejecuta las pruebas unitarias de tu proyecto Angular. Suele ejecutar las pruebas configuradas en el proyecto utilizando el marco de pruebas que se haya establecido, que normalmente es Karma con Jasmine.

- **ng version**: Muestra información sobre las versiones de Angular y sus dependencias asociadas en tu proyecto. Cuando ejecutas ng version, Angular CLI muestra los siguientes detalles:

  - *Angular CLI*: La versión de Angular CLI que estás utilizando.

  - *Angular Core*: La versión del paquete principal de Angular (@angular/core).

  - *Angular Compiler*: La versión del compilador de Angular (@angular/compiler).

  - *Node.js*: La versión de Node.js que tienes instalada, ya que Angular CLI se basa en Node.js.

  - *Package Manager:* La versión del gestor de paquetes que estás utilizando, como npm o yarn.

  - *OS*: El sistema operativo en el que estás ejecutando el comando.

También muestra la versión de otras dependencias clave de tu proyecto Angular, como TypeScript.