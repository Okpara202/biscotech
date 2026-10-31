import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { variantStyles } from "@/components/ui/typography";

type SelectProps = ComponentProps<"select"> & {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  containerClassName?: string;
};

export default function Select({
  label,
  placeholder,
  id,
  value,
  defaultValue,
  className,
  labelClassName,
  containerClassName,
  children,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  // Show the placeholder first when the select is uncontrolled and has no default
  const initialValue = placeholder && value === undefined && defaultValue === undefined ? "" : defaultValue;

  return (
    <div className={cn("flex flex-col gap-[1.125rem]", containerClassName)}>
      {label && (
        <label htmlFor={selectId} className={cn(variantStyles.contactHeader, labelClassName)}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={value}
          defaultValue={initialValue}
          className={cn(
            "w-full cursor-pointer appearance-none rounded-[1.25rem] border bg-transparent py-[1.125rem] pr-14 pl-6 transition-[border-color,box-shadow] duration-300 outline-none hover:border-light-teal/60 focus:border-light-teal focus:ring-4 focus:ring-light-teal/15",
            variantStyles.body,
            "leading-7",
            // The open list's options inherit the select's text colour, so while the sage
            // placeholder colour is on they'd all look faded. Give them their own colours.
            "[&_option]:bg-cards-and-sections [&_option]:text-text-charcoal",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-6 size-5 -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/*
Example usage:

import Select from "@/components/ui/select";

<Select label="Service" placeholder="Select a service">
  <option value="web">Web Development</option>
  <option value="mobile">Mobile Apps</option>
  <option value="design">UI/UX Design</option>
</Select>

<Select
  label="Budget"
  name="budget"
  className="border-gray-300"
  labelClassName="text-black"
  onChange={(e) => console.log(e.target.value)}
>
  <option value="small">Under $1,000</option>
  <option value="large">$1,000+</option>
</Select>
*/
