import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export default function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-400 text-sm flex items-center gap.15 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
      {...props}
    />
  );
}
