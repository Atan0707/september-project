import Link from 'next/link';
import Post from './Post';
import prisma from '@/lib/prisma'
import { Todo, columns } from '@/app/components/table-database/column';
import { DataTable } from '@/app/components/table-database/data-table';
import { useState, useEffect } from 'react';

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className=''>
      {/* <Link href={'/add-post'}>Add Post</Link> */}
      <h1>Feed</h1>
      {
        posts.map((post) => {
          return (
            <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content ?? ''}
            authorName={post.author ? post.author.name ?? '' : ''}
            />
          )
        })
      }
    </main>
  )
}

// update - 11.9.2024 - it have a bug, where if I use "use client", i cant use async function, making it hard to fetch data from database since it need to use it. I will try to find a solution for this.