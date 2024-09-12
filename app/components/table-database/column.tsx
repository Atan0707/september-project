"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Todo = {
  id: string
  author: string
  title: string
  content: string
}

export const columns: ColumnDef<Todo>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "author.name",
        header: "Author",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "content",
        header: "Content",
    },
]
