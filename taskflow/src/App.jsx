// ALUNOS:
// JOAO LUCAS DANTAS CALZERRA
// EDUARDO HENRIQUE LACERDA VERASG
// LUIS FELIPE BARROS SILVEIRA FALCONE
// CAIO AUGUSTO LEITE RAMALHO PESSOA
import { useState, useMemo, useCallback } from "react";

import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Filtro } from "./components/Filtro";
import { Contador } from "./components/Contador";
import { ThemeToggle } from "./components/ThemeToggle";
import { useTasks } from "./hooks/useTasks";
import { Toast } from "./components/Toast";

function App() {
  const { tarefas, adicionar, alternar, remover } = useTasks();

  const [filtro, setFiltro] = useState("todas");
  const [mensagem, setMensagem] = useState("");

  const avisarAdicionada = useCallback(() => {
    setMensagem("Tarefa adicionada!");
  }, []);

  const fecharMensagem = useCallback(() => {
    setMensagem("");
  }, []);

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "pendentes") {
      return tarefas.filter((tarefa) => !tarefa.concluida);
    }

    if (filtro === "concluidas") {
      return tarefas.filter((tarefa) => tarefa.concluida);
    }

    return tarefas;
  }, [tarefas, filtro]);

  const pendentes = useMemo(() => {
    return tarefas.filter((tarefa) => !tarefa.concluida).length;
  }, [tarefas]);

  return (
    <div className="taskflow">
      <h1>TaskFlow</h1>

      <ThemeToggle />

      <TaskForm
        onAdicionar={adicionar}
        onAdicionada={avisarAdicionada}
      />

      <Contador
        pendentes={pendentes}
        total={tarefas.length}
      />

      <Filtro
        filtro={filtro}
        onChange={setFiltro}
      />

      <TaskList
        tarefas={tarefasFiltradas}
        onToggle={alternar}
        onRemover={remover}
      />

      <Toast
        mensagem={mensagem}
        onFechar={fecharMensagem}
      />
    </div>
  );
}

export default App;
