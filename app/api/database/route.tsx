import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: { select: { name: true } }
      }
    });
    // res.status(200).json(posts);
    console.log(posts);
    return Response.json(posts)
  } catch (error) {
    // res.status(500).json({ error: 'Error fetching posts' });
    return Response.json({ error: 'Error fetching posts' });
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { title, content } = body;
//     console.log(title, content);
//     return new Response(JSON.stringify({ message: 'Data received' }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error parsing request body:', error);
//     return new Response(JSON.stringify({ error: 'Error parsing request body' }), {
//       status: 400,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }