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

## Desafío - Día 1: Operaciones Booleanas

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
---

## Desafío - Día 2: Variables

### Objetivo
El objetivo de este desafío es aprender a capturar y almacenar valores en variables para personalizar la experiencia del usuario dentro de una aplicación.

### Descripción
En este ejercicio, vamos a desarrollar un programa que simula una interacción básica con el usuario. El sistema hará tres preguntas y luego mostrará un mensaje con las respuestas ingresadas.

El programa debe solicitar al usuario que responda lo siguiente:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

Luego, se mostrará un mensaje en pantalla con la siguiente estructura:

```js
"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
```

Donde cada valor entre corchetes `[]` será reemplazado por la respuesta ingresada por el usuario.

---

### Ejercicio Opcional
Para profundizar en la práctica de estructuras condicionales, el programa puede incluir una pregunta adicional:

```
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
```

Dependiendo de la respuesta, se mostrará uno de los siguientes mensajes:

- **Si el usuario responde "1"**: "¡Muy bien! Sigue estudiando y tendrás mucho éxito."
- **Si el usuario responde "2"**: "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"

Para implementar esto, se puede usar una estructura `if`:

```js
if (respuesta == 1) {
    console.log("\u00a1Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == 2) {
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
```

---

### Consejos
- Puedes usar `console.log()`, `prompt()` y `alert()` para interactuar con el usuario.
- Si tienes conocimientos de HTML y CSS, puedes crear una interfaz más atractiva para la interacción.
- Prueba modificar el código agregando más preguntas para hacer la experiencia más interactiva.

#### Diferencias entre `alert()` y `prompt()`
- `alert()`: Muestra un mensaje en pantalla sin requerir una respuesta.
  ```js
  alert("\u00a1Hola, todos!");
  ```
- `prompt()`: Solicita al usuario que ingrese un valor y permite manipularlo.
  ```js
  const ciudad = prompt("Escribe tu ciudad:");
  alert(`\u00a1Eres de ${ciudad}!`);
  ```

---

### Recursos Adicionales
- [Operadores de Comparación en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

---

## Seguimiento
- [x] Día 1: Operaciones Booleanas
- [x] Día 2: Variables
- [ ] Día 3: ???
- [ ] Día 4: ???
- [ ] Día 5: ???
- [ ] Día 6: ???
- [ ] Día 7: ???

Cada día actualizaré este README con la nueva información del desafío y mi solución.


