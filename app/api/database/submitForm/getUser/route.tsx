export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { value } = body;
        console.log(value);
        return Response.json(value)
    }
}