import { useState } from "react";
import { Input } from "../Input"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: "Only letters",
    required_error: "Name is required",
  }).min(3),
  city: z.string({
    invalid_type_error: "Only letters",
    required_error: "City is required",
  }).min(3),
  abbreviation: z.string({
    invalid_type_error: "Only letters",
    required_error: "Abbreviation is required",
  }),
});
  
type FormSchemaType = z.infer<typeof FormSchema>;

export const AddForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const submitHandler: SubmitHandler<FormSchemaType> = async (data) => {
  };

  return (
    <div className="p-6 flex gap-6 border border-border rounded-3xl shadow-[0_2px_10px_rgba(20,20,30,0.05)] ">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value, ...others } }) => (
            <Input 
              value={value} 
              setValue={onChange} 
              placeholder="Name" 
              label="Name"
              name="name"
              error={errors?.name?.message}
            />
        )}
        />
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, value, ...others } }) => (
            <Input 
              value={value} 
              setValue={onChange}
              placeholder="City"
              label="City"
              name="city"
              error={errors?.city?.message}
            />
        )}
        />
        <Controller
          name="abbreviation"
          control={control}
          render={({ field: { onChange, value, ...others } }) => (
            <Input 
              value={value} 
              setValue={onChange}
              placeholder="Only uppercase"
              label="Abbreviation"
              name="abbreviation"
              error={errors?.abbreviation?.message}
            />
        )}
        />
        <button 
          onClick={handleSubmit(submitHandler)}
        >
          Add team
        </button>
    </div>
  )
}