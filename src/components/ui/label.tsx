import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      isOptional?: boolean;
    }
>(({ className, isOptional, ...props }, ref) => {
  const { t } = useTranslation();

  // Translate the children text if it is a string
  const translatedChildren =
    typeof props.children === "string" ? t(props.children) : props.children;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    >
      {translatedChildren}{" "}
      {isOptional && <span className="text-light-gray text-xs">({t("Optional")})</span>}
    </LabelPrimitive.Root>
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
