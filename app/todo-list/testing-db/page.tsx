"use client"
import Link from 'next/link';
// import prisma from '@/lib/prisma'
import { Todo, columns } from '@/app/components/table-database/column';
import { DataTable } from '@/app/components/table-database/data-table';
import { useState, useEffect } from 'react';
import axios from 'axios';

// async function getPosts(): Promise<Todo[]> { //test data
//   // return [
//   //   {
//   //     id: "728ed52f",
//   //     title: "Learn Next.js",
//   //     content: "Learn Next.js and Prisma",
//   //     author: "Tim"
//   //   },
//   //   {
//   //     id: "728ed52g",
//   //     title: "Learn React",
//   //     content: "Learn React and TypeScript",
//   //     author: "Tim",
//   //   },
//   //   {
//   //     id: "728ed52h",
//   //     title: "Learn GraphQL",
//   //     content: "Learn GraphQL and Apollo",
//   //     author: "Tim"
//   //   },
//   // ]
// }

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
      <Link href='/todo-list/new-todo'>Create New!</Link>
    </div>
  )

}

export default TodoList

// export default async function Home() {
//   const posts = await getPosts();
//   return (
//     <main className=''>
//       {/* <Link href={'/add-post'}>Add Post</Link> */}
//       <h1>Feed</h1>
//       {
//         posts.map((post) => {
//           return (
//             <Post
//             key={post.id}
//             id={post.id}
//             title={post.title}
//             content={post.content ?? ''}
//             authorName={post.author ? post.author.name ?? '' : ''}
//             />
//           )
//         })
//       }
//     </main>
//   )
// }

// update - 11.9.2024 - it have a bug, where if I use "use client", i cant use async function, making it hard to fetch data from database since it need to use it. I will try to find a solution for this.