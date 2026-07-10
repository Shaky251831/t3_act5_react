# Act5. Introducción a React - Fundamentos y Primer Componente

Mi proyecto consiste en una aplicación interactiva de **Lista de Tareas Pendientes** estructurada utilizando componentes funcionales en React y Vite.

---

##  Explicación del Proyecto (Lista de Tareas Pendientes).

### 1. El Encabezado (Componente Funcional Simple)

```jsx
function Encabezado() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Mi Lista de Tareas Pendientes</h1>
    </header>
  );
}
```

Es un componente estático. Su única función es pintar el título principal en la pantalla.

Usa estilos en línea (`style={{...}}`) configurados en formato de objetos de JavaScript.

### 2.(Componente con Props).

```jsx
function InfoUsuario(props) {
  return (
    <div style={{ background: '#e1f1fc', ... }}>
      <p><strong>Estudiante:</strong> {props.nombre}</p>
    </div>
  );
}
```

Este componente es dinámico porque utiliza **props** (propiedades). En lugar de escribir un nombre directamente adentro de este bloque, el componente se diseñó para recibir datos desde fuera.

Cuando en la parte de abajo se escribe `<InfoUsuario nombre="Briseida Márquez Agustín" />`, el componente toma esa "prop" y la pinta dentro de las llaves `{props.nombre}`.

### 3. El Estado de la Aplicación (useState en el Componente Principal)

Dentro de la función principal `App()`, se declaran las variables que van a cambiar cuando el usuario interactúe con la página:

```jsx
const [tareas, setTareas] = useState([ ... ]);
const [nuevaTarea, setNuevaTarea] = useState('');
```

- **`tareas`**: Es un arreglo (una lista) que guarda los pendientes. Inicia con dos tareas por defecto ("Instalar React" y "Subir el GitHub Pages"). `setTareas` es la función que se usa para agregar más elementos a esa lista.
- **`nuevaTarea`**: Guarda el texto exacto que se va escribiendo letra por letra dentro del cuadro de texto (input).

### 4. El Formulario y el botón "Agregar"

```jsx
const manejarAgregar = (e) => {
  e.preventDefault(); // Evita que la página se recargue por completo
  ...
  setTareas([...tareas, nueva]); // Agrega la nueva tarea al final del arreglo
  setNuevaTarea(''); // Borra el texto del input para dejarlo limpio
};
```

Lo que hace es que cuando se escribe algo en el input y presionas el botón "Agregar", se dispara este evento. Captura el texto guardado en `nuevaTarea`, le asigna un número de identificación único (`id: Date.now()`), lo suma a la lista existente usando el operador de propagación (`...tareas`), y limpia el cuadro de texto para la siguiente tarea.

### 5. El Renderizado Dinámico de la Lista (.map())

```jsx
{tareas.map((tarea) => (
  <li key={tarea.id} style={{ fontSize: '28px' }}>
    {tarea.texto}
  </li>
))}
```

React no sabe pintar arreglos directamente en forma de lista HTML. Por eso usamos el método `.map()`, que toma cada tarea guardada en el estado y la transforma individualmente en una etiqueta de lista `<li>`.

**La importancia de la key:** Al poner `key={tarea.id}`, le asignamos una "etiqueta de identificación" a cada renglón. Si se borra o se agrega una tarea, React sabe exactamente cuál se modificó sin tener que redibujar toda la pantalla desde cero.

---

# Curstionario.

### a) ¿Qué diferencia hay entre props y state en React?

- **Props (Propiedades):** Son de solo lectura (inmutables), lo que significa que el componente que las recibe no las puede modificar de forma directa.
- **State (Estado):** Cuando el estado de un componente se actualiza, React vuelve a renderizar de forma automática el componente en la pantalla para reflejar los cambios.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` funciona como un identificador único para cada elemento de la lista. Sin la `key`, React tendría que volver a renderizar toda la lista completa en lugar de solo actualizar el elemento modificado, lo que afectaría el rendimiento de la aplicación.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación

La función `useState` es un Hook de React que nos permite añadir un estado interno a un componente funcional. En esta aplicación lo utilicé de la siguiente manera:

1. Para almacenar y actualizar el arreglo dinámico de las tareas (`tareas`).
2. Para capturar el texto que el usuario va escribiendo dentro del campo de entrada (`nuevaTarea`).

---

## Enlaces del Proyecto

- **Repositorio de GitHub:** https://github.com/Shaky251831/t3_act5_react    
- **Despliegue en GitHub Pages:** https://shaky251831.github.io/t3_act5_react/
