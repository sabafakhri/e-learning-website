import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-inter",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        JoinAsATeacher:
          "bg-purple-900 rounded-[5px] text-background dark:text-foreground hover:bg-purple-900/90",

        subscribe:
          "text-14-30 lg:text-16-30 bg-purple-900 rounded-[5px] text-background dark:text-foreground lg:rounded-r-[10px] sm:rounded-l-none transition-all duration-300 hover:bg-purple-900/90",
        classes:
          "text-14-30 lg:text-16-20 bg-purple-900 rounded-[5px] text-background dark:text-foreground lg:rounded-[10px] transition-all duration-300 hover:bg-purple-900/90 px-7.5 py-5 font-normal text-background dark:text-foreground",
        JoinCourses:
          "p-3.75 text-14-30 text-purple-900 lg:text-16-20 bg-purple-300 rounded-[5px] dark:text-foreground lg:rounded-[10px] transition-all duration-300 hover:bg-purple-300/90 font-normal",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        JoinAsATeacher: "h-12.5 w-fit px-5",
        subscribe: "h-12.5 w-full lg:h-15 sm:w-35.5",
        classes: "h-12.5 lg:h-15 w-40.5",
        JoinCourses: "h-11",
        HomeHedear: "h-12.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
