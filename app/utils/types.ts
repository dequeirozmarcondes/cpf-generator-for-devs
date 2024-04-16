export interface RandomNumberParams {
  n: number;
}

export interface ModParams {
  dividendo: number;
  divisor: number;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClassName?: string;
}
