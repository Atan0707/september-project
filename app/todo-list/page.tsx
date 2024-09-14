"use client"
import Link from 'next/link';
// import prisma from '@/lib/prisma'
import { Todo, columns } from '@/app/components/table-database/column';
import { DataTable } from '@/app/components/table-database/data-table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';


const TodoList = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [errorBool, setErrorBool] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/database');
        console.log(result.data)
        setData(result.data);
        setLoading(false);
        console.log(result)
      }
      catch (error) {
        setError('Error fetching posts' + error);
        setErrorBool(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='m-5'>
      <h1>Todo List</h1>
      {errorBool && <div>{error}</div>}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <Button>
      <Link href='/todo-list/new-todo'>Create New!</Link>
      </Button>
      
    </div>
  )

}

export default TodoList