import { useEffect } from "react";
//Passo 4 feito por Caio Augusto Leite Ramalho Pessoa

//Toast é o responsavel por exibir as mensagens de alteração na tela
export function Toast({ mensagem, onFechar }) {
  useEffect(() => {
    if (!mensagem) return;

    // Cria um temporizador para chamar onFechar após 3 segundos
    const temporizador = setTimeout(() => {
      onFechar();
    }, 3000);
    //Apaga o temporizador
    return () => {
      clearTimeout(temporizador);
    };
  }, [mensagem, onFechar]);

  if (!mensagem) return null;

  return <div className="toast">{mensagem}</div>;
}