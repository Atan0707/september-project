import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
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