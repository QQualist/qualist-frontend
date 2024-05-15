import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  icon?: React.ElementType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, icon: Icon, ...props }, ref) => {
    return (
      <div className="w-full">
        <Label htmlFor={id}>
          {label}{" "}
          {props.required ? (
            ""
          ) : (
            <span className="text-dark-gray text-xs">(Optional)</span>
          )}
        </Label>
        <div className="flex w-full h-9 items-center rounded-md border border-input pr-3">
          <input
            id={id}
            type={type}
            className={cn(
              "h-full w-full bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:rounded-md disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          {Icon && <Icon size={24} />}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
