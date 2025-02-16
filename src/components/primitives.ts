import { tv } from "tailwind-variants";

export const title = tv({
  base: "inline tracking-tighter font-normal font-grotesk",
  variants: {
    color: {
      violet: "from-[#5C2BD3] to-[#00FEEB]",
      yellow: "from-[#FFFF3B] to-[#F32A14]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      orange: "from-[#FF705B] to-[#FFB457]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xs: "text-2xl lg:text-3xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    italic: {
      true: "italic",
    },
    bold: {
      false: "font-normal",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-r",
    },
  ],
});

export const subtitle = tv({
  base: " w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-800/50 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    size: {
      xs: "text-sm lg:text-base",
      sm: "text-base lg:text-lg",
      md: "text-lg lg:text-xl",
      lg: "text-xl lg:text-2xl",
    },
  },
  defaultVariants: {
    fullWidth: true,
    size: "sm",
  },
});
