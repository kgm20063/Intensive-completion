import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return <Input {...props} />;
}

export default Input;