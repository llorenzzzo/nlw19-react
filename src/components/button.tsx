import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-gray-500 text-blue flex flex-row justify-between items-center w-full text-left h-12 font-semibold px-5 rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  );
}
