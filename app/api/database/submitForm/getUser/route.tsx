// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { value } = body;
//         console.log(value);
//         return new Response(JSON.stringify({ value }), {
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.log('Error making POST request:', error);
//         return new Response(JSON.stringify({ error: 'Failed to process request' }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }