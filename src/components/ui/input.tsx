import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { variantStyles } from "@/components/ui/typography";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
};

export default function Input({
  label,
  id,
  type = "text",
  className,
  labelClassName,
  containerClassName,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-[1.125rem]", containerClassName)}>
      {label && (
        <label htmlFor={inputId} className={cn(variantStyles.contactHeader, labelClassName)}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={cn(
          "w-full rounded-[1.25rem] border bg-transparent px-6 py-[1.125rem] transition-[border-color,box-shadow] duration-300 outline-none hover:border-light-teal/60 focus:border-light-teal focus:ring-4 focus:ring-light-teal/15",
          variantStyles.body,
          "leading-7",
          className,
        )}
        {...props}
      />
    </div>
  );
}

/*
Example usage:

import Input from "@/components/ui/input";

<Input label="Name" placeholder="John Doe" />

<Input
  type="email"
  label="Email"
  placeholder="you@example.com"
  className="border-gray-300"
  labelClassName="text-black"
/>

<Input type="number" label="Budget" min={0} />

// Without a label
<Input type="search" placeholder="Search..." />

// Control the wrapper (e.g. width in a grid)
<Input label="Phone" type="tel" containerClassName="md:col-span-2" />
*/
