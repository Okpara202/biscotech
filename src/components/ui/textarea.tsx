import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { variantStyles } from "@/components/ui/typography";

type TextareaProps = ComponentProps<"textarea"> & {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
};

export default function Textarea({
  label,
  id,
  className,
  labelClassName,
  containerClassName,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-[1.125rem]", containerClassName)}>
      {label && (
        <label htmlFor={textareaId} className={cn(variantStyles.contactHeader, labelClassName)}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-[8.0625rem] w-full resize-y rounded-[1.25rem] border bg-transparent px-6 py-2.5",
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

import Textarea from "@/components/ui/textarea";

<Textarea label="Message" placeholder="Tell us about your project" />

<Textarea
  label="Project Details"
  rows={6}
  className="border-gray-300 resize-none"
  labelClassName="text-black"
/>
*/
