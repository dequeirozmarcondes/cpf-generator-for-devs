import { ButtonProps } from "../utils/types";

export function Button({ children, customClassName, ...rest }: ButtonProps) {
  const className = customClassName ? `button ${customClassName}` : `button`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
