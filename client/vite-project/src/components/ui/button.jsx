import React from 'react';
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-red-700 dark:text-white dark:hover:bg-red-600",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 dark:text-white",
        link: "text-primary underline-offset-4 hover:underline dark:text-white",
        // New game variant style
        game: "bg-game-color text-white hover:bg-game-color-dark dark:bg-game-color-dark dark:hover:bg-game-color-darker",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
