"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Payment, columns } from '../components/data-table/column'
import { DataTable } from '../components/data-table/data-table'
import Link from 'next/link';

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52g",
        amount: 200,
        status: "processing",
        email: "lol@gmailcom",
        }
      // ...
    ];
  }

const TodoList = () => { 
    const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className='m-5'>
        {/*
         Goal for today (11.9.2024)
        - complete basic todo list
        - able to add todo (maybe just use JSON file for now)
        - create nice layout
        */}
        <h1>Todo List</h1>
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} /></div>
        <Button>
          <Link href='/todo-list/new-todo'>Create New!</Link>
          </Button>
    </div>
  )
}

export default TodoList