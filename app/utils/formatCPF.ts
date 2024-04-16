// utils/formatCPF.js

interface FormatCPFParams {
  cpf: number | string;
}

export function formatCPF({ cpf }: FormatCPFParams): number | string {
  return String(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
