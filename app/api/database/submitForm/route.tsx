// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { title, content, value } = body;
      console.log(title, content, value);
      return new Response(JSON.stringify({ message: 'Data received' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error parsing request body:', error);
      return new Response(JSON.stringify({ error: 'Error parsing request body' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }