"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image"; // Importing Image component from Next.js
import { ReactNode } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  placeholder?: string;
  label?: string;
  iconAlt?: string;
  disabled?: boolean;
  iconSrc?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: ReactNode;
  renderSkeleton?: (field: any) => ReactNode;
}

const RenderField: React.FC<{ field: any; props: CustomProps }> = ({
  field,
  props,
}) => {
  const { fieldType, iconAlt, iconSrc, placeholder = "Enter text" } = props; 

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              className="ml-2"
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
            />
          )}

          <FormControl>
            <Input
              className="shad-input border-0 "
              type="text"
              placeholder={placeholder}
              {...field}
              
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (

        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <FormControl>
            <PhoneInput
              defaultCountry="NG"
              placeholder={placeholder}
              international
              withCountryCallingCode
              value={field.value }
              onChange={field.onChange}
              className="py-3 px-3 border-0"
            />
          </FormControl>
        </div>
      );
    default:
      return null;
  }
};

const CustomFormField: React.FC<CustomProps> = (props) => {
  const { control, fieldType, name, placeholder, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
