# Shadcn/UI Integration Best Practices

This document describes best practices for integrating Shadcn/UI, including composition, token mapping, and accessibility.

## Composition
- **Build Your Own Components:** Shadcn/UI provides unstyled primitives that can be composed to create your own custom components.
- **Don't Be Afraid to Copy:** The recommended way to use Shadcn/UI is to copy the code for the components you need into your own project and customize them as you see fit.
- **Keep it Simple:** Start with the simplest components and build up from there.

## Token Mapping
- **Tailwind CSS:** Shadcn/UI is built on top of Tailwind CSS.
- **`tailwind.config.js`:** The design tokens from `knowledge/design-tokens.md` should be mapped to the Tailwind CSS configuration in `tailwind.config.js`.
- **CSS Variables:** Use CSS variables to define your design tokens so they can be easily reused and updated.

## Accessibility
- **Radix UI:** Shadcn/UI is built on top of Radix UI, which provides accessible components out of the box.
- **Keyboard Navigation:** All components are fully keyboard navigable.
- **WAI-ARIA:** All components follow the WAI-ARIA design patterns.
- **Testing:** Use tools like [axe](https://www.deque.com/axe/) to test the accessibility of your application.

## Example: Custom Button Component
```jsx
// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```
