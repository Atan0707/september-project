import { NextApiRequest, NextApiResponse } from 'next';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        return Response.json({ message: 'Read transactions' });
    } catch (error) {
        return Response.json({ error: 'Failed to read transactions' });
    }
};