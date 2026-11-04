import { useReducer } from 'react';
import { tasksReducer } from '../reducers/tasksReducer';

export function TesteReducer() {
  const [tarefas, dispatch] = useReducer(tasksReducer, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Teste do Reducer (Papel 2)</h2>
      <button 
        onClick={() => dispatch({ type: "ADD", texto: "Estudar React e Hooks" })}
      >
        Adicionar Tarefa Exemplo
      </button>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => dispatch({ type: "TOGGLE", id: tarefa.id })}
              style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {tarefa.texto}
            </span>
            <button 
              onClick={() => dispatch({ type: "REMOVE", id: tarefa.id })}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}