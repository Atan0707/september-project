"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useEffect, useState } from "react"
 
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Must atleast 2 character.",
  }),
  content: z.string().min(5, {
    message: "Must atleast 5 character.",
  }),
  value: z.string({
    required_error: "Please select a language.",
  }),
})

interface User {
  value: string;
  label: string;
}
 
export function ProfileForm() {
  const [users, setUsers] = useState<User[]>([])
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)

  // fetch data from database
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/api/database/getRegistered');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const username: User[] = response.data.map((user: any) => ({
          value: user.name,
          label: user.name
        }));
        setUsers(username);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    getData();
  }, []);
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: "",
        content: "",
        value: "",
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
    
    {/* Title */}
    <FormField
      control={form.control}
      name="title"
      render={({field}) => (
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
    {/* Content */}
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

    {/* Combobox */}
    <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>User</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {value
                        ? users.find((user) => user.value === value)?.label
                        : "Select user..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {users.map((user) => (
                            <CommandItem
                              key={user.value}
                              value={user.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                                form.setValue("value", currentValue)
                              }}
                            >
                              {user.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  value === user.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    
    
    <Button type="submit">Submit</Button>
  </form>
</Form>
  )
}

export default ProfileForm;