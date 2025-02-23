import { ComponentProps } from "react";
import { Mail } from "lucide-react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 border-2 border-gray-600 rounded-xl px-4 w-full h-12 gap-2 flex items-center focus-within:border-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    ></div>
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    ></span>
  );
}

interface InputProps extends ComponentProps<"input"> {}

export function InputField(props: InputProps) {
  return (
    <input className="flex-1 outline-0 placeholder-gray-400" {...props}></input>
  );
}
