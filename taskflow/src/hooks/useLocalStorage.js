import { useState, useEffect, useDebugValue } from "react";
//Passo 4 feito por Caio Augusto Leite Ramalho Pessoa
//Esse componente generico serve para salvar,verificar e atualizar o valor armazenado
export function useLocalStorage(chave, valorInicial) {
  // Aqui ele verifica o valor do localStorage
  const [valor, setValor] = useState(() => {
    try {
      const itemSalvo = localStorage.getItem(chave);
      return itemSalvo ? JSON.parse(itemSalvo) : valorInicial;
    } catch (erro) {
      console.error(`Erro ao ler ${chave} do localStorage:`, erro);
      return valorInicial;
    }
  });


  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      console.error(`Erro ao salvar ${chave} no localStorage:`, erro);
    }
  }, [chave, valor]);

 
  useDebugValue(valor);

  return [valor, setValor];
}