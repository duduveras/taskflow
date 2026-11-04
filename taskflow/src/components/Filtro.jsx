
export function Filtro({ filtro, onChange }) {
  return (
    <div>
      <button onClick={() => onChange("todas")}>
        Todas
      </button>

      <button onClick={() => onChange("pendentes")}>
        Pendentes
      </button>

      <button onClick={() => onChange("concluidas")}>
        Concluídas
      </button>
    </div>
  );
}
