import { formatCPF } from "../utils/formatCPF";
import { ModParams, RandomNumberParams } from "../utils/types";

// Gera números aleatórios entre 0 e n
function randomiza({ n }: RandomNumberParams): number {
  return Math.floor(Math.random() * n);
}

// Calcula o módulo do dividendo pelo divisor
function mod({ dividendo, divisor }: ModParams): number {
  return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
}

// Gera um novo CPF formatado
export function generateCPF(): string {
  var n = 9;
  var n1 = randomiza({ n });
  var n2 = randomiza({ n });
  var n3 = randomiza({ n });
  var n4 = randomiza({ n });
  var n5 = randomiza({ n });
  var n6 = randomiza({ n });
  var n7 = randomiza({ n });
  var n8 = randomiza({ n });
  var n9 = randomiza({ n });

  // Cálculo do primeiro dígito verificador
  var d1 =
    n9 * 2 +
    n8 * 3 +
    n7 * 4 +
    n6 * 5 +
    n5 * 6 +
    n4 * 7 +
    n3 * 8 +
    n2 * 9 +
    n1 * 10;
  d1 = 11 - mod({ dividendo: d1, divisor: 11 });
  if (d1 >= 10) d1 = 0;

  // Cálculo do segundo dígito verificador
  var d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11;
  d2 = 11 - mod({ dividendo: d2, divisor: 11 });
  if (d2 >= 10) d2 = 0;

  // Formata o CPF
  var newCPF = formatCPF({
    cpf: `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`,
  });

  return String(newCPF);
}
