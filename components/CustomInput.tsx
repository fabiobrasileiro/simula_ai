import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'

const formSchema = authFormSchema('sign-up');

interface CustomInput{
  control: Control<z.infer<typeof formSchema>>,
  label: string,
  name: FieldPath<z.infer<typeof formSchema>>,
  placeholder: string
}

const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={name === 'password' ? 'password' : 'text'} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomInput
