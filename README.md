# Desafío de Lógica de Programación - 7DaysOfCode

Este repositorio contiene mi progreso en el Desafío de Lógica de Programación organizado por **Desafío Latam**. Durante 7 días, resolveré diferentes ejercicios enfocados en estructuras de control, funciones y manipulación de datos en JavaScript, con el objetivo de mejorar mis habilidades lógicas y reforzar mis conocimientos en programación.

## Objetivos del Desafío
- Fortalecer mi base técnica en programación.
- Mejorar la resolución de problemas complejos.
- Aumentar la confianza al enfrentar desafíos prácticos.
- Crear un proyecto que pueda agregar a mi portafolio.

## Dinámica
- Cada día recibiré un nuevo desafío con su contexto y objetivos.
- Resolveré cada problema utilizando JavaScript.
- Compartiré mis soluciones en este repositorio.
- Utilizaré Discord y GitHub para interactuar con otros participantes.

---

## Desafío - Día 1: Comparación de Tipos en JavaScript

En este primer desafío, exploramos un tema común en JavaScript: los problemas al comparar variables de diferentes tipos. JavaScript no alerta sobre errores de tipos en tiempo de compilación, lo que puede generar resultados inesperados al comparar valores.

### Problema
Se nos dio un código que intenta comparar variables de diferentes tipos, pero que podría generar resultados inesperados debido a la conversión implícita de JavaScript.

Ejemplos de casos confusos en JavaScript:
```js
console.log(false == '0'); // true
console.log(null == undefined); // true
console.log(" \t\r\n" == 0); // true
console.log(' ' == 0); // true
```

Nuestra tarea es corregir un fragmento de código para que realice las comparaciones correctamente y genere mensajes precisos sobre si las variables tienen el mismo valor y/o el mismo tipo.

### Código a corregir
```js
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
```

El desafío consiste en reescribir el código para que imprima la información de manera correcta, que tenga sentido, sin errores y que siempre sea verdadero.

---


### Recursos Adicionales
- [Operadores de Comparación en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

---

## Seguimiento
- [ ] Día 1: Comparación de Tipos
- [ ] Día 2: ???
- [ ] Día 3: ???

Cada día actualizaré este README con la nueva información del desafío y mi solución.


