import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { tema, alternarTema } = useTheme();

  return (
    <button type="button" onClick={alternarTema}>
      {tema === "claro" ? "Ativar tema escuro" : "Ativar tema claro"}
    </button>
  );
}