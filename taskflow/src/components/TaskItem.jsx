
  export function TaskItem({ tarefa, onToggle, onRemover }) {
    return (
      <li>
        <span
          style={{
            textDecoration: tarefa.concluida ? "line-through" : "none",
          }}
        >
          {tarefa.texto}
        </span>

        <button onClick={() => onToggle(tarefa.id)}>
          Concluir
        </button>

        <button onClick={() => onRemover(tarefa.id)}>
          Remover
        </button>
      </li>
    );
  }
