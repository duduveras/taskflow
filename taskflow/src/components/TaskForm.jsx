
import { useState, useRef, useEffect } from "react";

export function TaskForm({ onAdicionar, onAdicionada }) {
  const [texto, setTexto] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (texto.trim() === "") {
      return;
    }

    onAdicionar(texto.trim());

    setTexto("");
    inputRef.current.focus();

    onAdicionada();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
