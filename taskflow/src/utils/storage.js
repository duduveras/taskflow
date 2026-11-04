export function lerTarefasSalvas() {
//Passo 4 feito por Caio Augusto Leite Ramalho Pessoa
  try {
    const dados = localStorage.getItem("taskflow-tarefas");
    // Se houver dados salvos, faz o parse para JSON; caso contrário, retorna um array vazio
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao ler as tarefas do localStorage:", erro);
    return [];
  }
}