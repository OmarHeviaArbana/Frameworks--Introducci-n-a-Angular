# Ejercicio 4 – Directivas de atributo y directivas estructurales

## 1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:

**¿Para qué sirve ngFor?**

ngFor es la directiva de Angular diseñada para iterar sobre una colección de elementos, como un arreglo, y renderizar un bloque de HTML para cada uno de estos elementos.

Un aspecto clave de ngFor es su capacidad para reactivar a los cambios en la colección sobre la que itera. Si un elemento se añade, elimina, o incluso si el orden de los elementos cambia, Angular automáticamente actualiza el DOM para reflejar estos cambios.

ngFor no solo es poderoso por su capacidad de iterar sobre arreglos simples. También ofrece opciones avanzadas, como el acceso al índice de cada elemento, iteración sobre objetos, y la creación de listas dinámicas que reaccionan a los cambios en los datos de entrada.

```text
<ul>
  <li *ngFor="let elemento of arreglo">
    {{elemento}}
  </li>
</ul>
```

**Variables locales ngFor**

**index**

Representa el índice del elemento en la iteración, comenzando desde 0.
Por ello, es posible realizar operaciones basadas en la posición del elemento, por ejemplo, aplicar clases CSS c según la posición.

```text
<ul>
  <li *ngFor="let elemento of arreglo"; let i = index">
     {{i}}:{{elemento}}
  </li>
</ul>
```


**even**

Variable de tipo boolea que indica si el índice es true o false.
Será true si el índice del elemento actual en la iteración es un número par (0, 2, 4, 6, ...). También es útil para aplicar estilos condicionales.

```text
<ul>
  <li *ngFor="let elemento of arreglo"; let isOnSale = even">
    <span [ngClass]="{even: isOnSale}">
     {{elemento}}
    </span>
  </li>
</ul>
```



**odd**

Es una variable de tipo boolea que indica si el índice es true o false. Será true si el índice del elemento actual en la iteración es un número impar (1, 3, 5, 7, ...). También es útil para aplicar estilos condicionales.

```text
<ul>
  <li *ngFor="let elemento of arreglo"; let isOnSale = odd">
    <span [ngClass]="{ odd: isOnSale}">
     {{elemento}}
    </span>
  </li>
</ul>
```

**first**

Es una variable boolean que indica si el elemento actual es el primero en la lista (true) o no (false). Se puede usar para aplicar un estiloal primer elemento de la lista.

```text
<ul>
  <li *ngFor="let elemento of arreglo"; let isFirst = "first">
    <span class="first">First Element:</span>
     {{elemento}}
  </li>
</ul>
```

**last**

Es una variable boolean que indica si el elemento actual es el último en la lista (true) o no (false). Se puede usar para aplicar un estiloal último elemento de la lista.

```text
<ul>
  <li *ngFor="let elemento of arreglo"; let isLast = "last">
    <span class="last">Last Element:</span>
     {{elemento}}
  </li>
</ul>
```

## 2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.

**trackBy**

Internamente ngFor cada vez que se modifique, añada o elimine un elemento del array, Angular volverá a redibujar completemente el DOM desde cero. Esto puede ser un problema en aplicaciones medianas o grandes.

Para soluciónar esto, se puede añadir a la directiva *trackBy* que es una función que realiza un seguimiento de los cambios en elementos del array. De esta manera, solo redibuja los elementos que hayan sido creados, modificados o eliminados.

Para implementar esta solución primero hay que **definir la función** trackBy():

```text
trackByElement(index: number, elemento: any): any {
    return elemento; 
}
```

Posteriormente, debemos **agregar la función trackBy como parámetro** del ngFor:

```text
<ul>
    <li *ngFor="let elemento of arreglo; trackBy: trackByElement">
        {{elemento}}
    </li>
</ul>
```

## 3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.

No es posible utilizar varias directivas estructurales (*ngIf o *ngFor, por ejemplo)  al unísono en un mismo elemento. Basicamente da un error al utilizar el asterísco (*). 

El problema radica es que estas directivas manipulan el DOM por lo que al ser utilizadas en un mismo elemento Angular no sabría como actuar y causaria conflictos entre dichas directivas. Lo mejor ante estos conflictos suele ser utilizar directivas anidadas en diferentes elementos. De esta forma podríamos combinarlas sin problemas.