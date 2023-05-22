import { InputHTMLAttributes } from "react";

// 1
type MyType = { color: string };

// 2
interface MyInterface {
  color: string;
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...props} />;
}

export default Input;
