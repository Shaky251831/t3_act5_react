import { useState } from 'react';

// a) Componente funcional simple.
function Encabezado() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Mi Lista de Tareas Pendientes</h1>
      <p>Proyecto en React</p>
    </header>
  );
}

// b) Componente que recibe y muestre props.
function InfoUsuario(props) {
  return (
    <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
      <p><strong>Estudiante:</strong> {props.nombre}</p>
      <p><strong>Materia:</strong> {props.materia}</p>
    </div>
  );
}

// Componente Principal
function App() {
  // c) Componente que use estado (useState) para manejar la lista y el texto del input.
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Terminar mi ejercicio' },
    { id: 2, texto: 'Subir el GitHub Pages' }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para añadir una nueva tarea
  const manejarAgregar = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === '') return;

    const nueva = {
      id: Date.now(), // ID único para usarlo de key
      texto: nuevaTarea
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea(''); // Limpiar el input
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Usamos el componente simple */}
      <Encabezado />

      {/* Usamos el componente con props */}
      <InfoUsuario nombre="Briseida Márquez Agustín" materia="Programación Web - Verano" />

      {/* Formulario para cambiar el estado agregando ítems */}
      <form onSubmit={manejarAgregar} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          style={{ flexGrow: 1, padding: '8px' }}
        /> 
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>Agregar</button>
      </form>

      {/* d) Una lista renderizada dinámicamente a partir de un arreglo usando .map()*/}
      <h3>Mis Pendientes:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ margin: '8px 0', fontSize: '16px' }}>
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;