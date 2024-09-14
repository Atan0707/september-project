// import { NextApiRequest, NextApiResponse } from 'next';

export const GET = async () => {
    try {

        return Response.json({ message: 'Read transactions' });
    } catch (error) {
        return Response.json({ error: 'Failed to read transactions' });
    }
};