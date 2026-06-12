"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:     "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
        destructive: "bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-500",
        outline:     "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
        secondary:   "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
        ghost:       "text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
        cta:         "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-400 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm:      "h-8 px-3 text-xs",
        lg:      "h-12 px-6 text-base",
        xl:      "h-14 px-8 text-lg",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
