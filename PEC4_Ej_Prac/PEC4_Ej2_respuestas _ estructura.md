# Ejercicio 2 – Hola Mundo con Angular

## 1.¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?

Introducir el siguiendo comando en terminal:

```text
ng new angular-ecommerce
````

Debemos elegir dos configuraciones:

- Elegir cómo vamos a manejar nuestros estilos, hoja de estilo css o scss por ejemplo. En este caso vamos a utilizar la hoja de estilos CSS con su sintaxis habitual.
  
- Utilizar SSR o en su defecto CSR. Para esta práctica de limitado alcance, se utilizará CSR (los motivos para ellos se encuentrar en el README de la PEC 4)

### **Explicación de la estructura y ficheros que ha generado Angular CLI:**

- **tsconfig.app.json**: Archivo principal para la configuración de TypeScript.
- **tsconfig.json**: Extensión con más configuraciones de TypeScript.
- **tsconfig.spec.json**: Configuración de TypeScript pero para el ambiente de pruebas.
- **angular.json**: Archivo principal con toda la configuración del proyecto Angular.
- **.editorconfig**: Permite autoformatear los archivos, espacios, indentación, etc. Hay que tener instalado la extensión en el editor.
- **.gitignore**: Indicarle a GIT qué archivos/directorios ignorar.
- **package-lock.json**: Describe el las dependencias exactas que se generaron en la instalación del proyecto.
- **package.json**: Archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
- **README.md**: Archivo markdown para la documentación del proyecto.
- **node_modules:** Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.
- **src**: Directorio principal del proyecto donde encontramos:
  - **assets**: Directorio para imágenes y otros recursos que la app necesita.
  - **environments**: Directorio de ambientes, por defecto viene con desarrollo y producción.
  - **favicon.ico**: Ícono por defecto que tendrá la pestaña del navegador.
  - **index.html**: Archivo HTML principal desde donde se construye toda la aplicación.
  - **main.ts**: Archivo principal para la configuración de Angular.

  - **styles.css**: Archivo principal de estilos.
  - **app**: Directorio donde guardaremos todo el código fuente de Angular.
    - **app.component.ts**: Este es el archivo TypeScript del componente principal (AppComponent) de la aplicación. Contiene la lógica y el comportamiento del componente principal, incluyendo las propiedades y métodos que se utilizan para manejar la funcionalidad del componente.
    - **app.component.html**: Este es el archivo de plantilla HTML para el componente principal (AppComponent). Define la estructura y el diseño de la vista del componente.
    - **app.component.css**: Este es el archivo de estilos CSS para el componente principal (AppComponent). Contiene los estilos específicos para la apariencia del componente.
    - **app.module.ts**: Este es el archivo de módulo principal (AppModule) de la aplicación. En este archivo, defines los componentes, servicios, directivas y otros elementos que pertenecen al módulo principal de la aplicación. También especificas los módulos importados de terceros o de la propia aplicación.
    - **app-routing.module.ts**: Este archivo define el enrutamiento de la aplicación. Contiene las configuraciones de las rutas que se utilizarán para navegar entre los diferentes componentes de la aplicación.
    - **app-routing.module.spec.ts**: Este archivo contiene las pruebas unitarias (specs) para app-routing.module.ts, si se generan pruebas con Angular CLI.
    **app.component.spec.ts**: Este archivo contiene las pruebas unitarias para el componente principal (AppComponent). Si optaste por crear pruebas unitarias al configurar tu proyecto, estos archivos estarán presentes para los distintos componentes.

## 2.Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

- app.module.ts - @NgModule (declarations, imports, providers, bootstrap).

- app.component.ts - @Component (selector, templateUrl, styleUrls).

## 3.¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?ˆ