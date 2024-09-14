"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ComboboxDemo } from "../combobox/combobox"
import axios from "axios"
 
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Must atleast 2 character.",
  }),
  content: z.string().min(5, {
    message: "Must atleast 5 character.",
  }),
})
 
export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: "",
        content: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
          const response = await axios.post("/api/database/submitForm", {
            title: values.title,
            content: values.content,
            value: values.value,
          })
          console.log(response.data)
        } catch (error) {
          console.log('Error making POST request:', error)
        }
      }
  // ...
 
  return (
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            Add title of you content.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Input placeholder="what do you do today?" {...field} />
          </FormControl>
          <FormDescription>
            Share your stories here!
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <ComboboxDemo />
    <Button type="submit">Submit</Button>
  </form>
</Form>
  )
}

export default ProfileForm;