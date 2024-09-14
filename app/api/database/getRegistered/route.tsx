import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const posts = await prisma.user.findMany()
      // res.status(200).json(posts);
      console.log(posts);
      return Response.json(posts)
    } catch (error) {
      // res.status(500).json({ error: 'Error fetching posts' });
      return Response.json({ error: 'Error fetching posts' });
    }
  }