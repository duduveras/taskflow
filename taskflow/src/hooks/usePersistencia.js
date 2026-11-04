import { useEffect } from "react";
//Passo 4 feito por Caio Augusto Leite Ramalho Pessoa
//o UsePersistence ira verificar o valor e depoois usar o UseLocalStorage para armazenar
export function usePersistencia(tarefas, dispatch) {
  //Busca as tarefas na API se o app abrir vazio
  useEffect(() => {
    if (tarefas.length > 0) return;

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((resposta) => resposta.json())
      .then((dados) => {
        //Converte os itens da API { id, title e completed} para o formato do contrato { id, texto, concluida }
        const tarefasFormatadas = dados.map((item) => ({
          id: item.id,
          texto: item.title,
          concluida: item.completed,
        }));
        
        dispatch({ type: "SET", tarefas: tarefasFormatadas });
      })
      .catch((erro) => {
        console.error("Erro ao buscar tarefas da API:", erro);
      });
  }, []); //É o aviso do editor sobre a falta de tarefas

  //Salva a lista de taraefas no navegador 
useEffect(() => {
    localStorage.setItem("taskflow-tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
}