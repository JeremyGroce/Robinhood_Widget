// dependencies
import express, { Request, Response } from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 5000;

dotenv.config();
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

// middleware
app.use(express.json());
app.use(cors());

// Process Login
app.post('/login', (req: Request, res: Response) => {
    console.log('|pong');
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'username & pass required' });
    } else {
        res.status(200).json({ message: 'Login Successful' });
    }
});

// Call Alpha Vantage for Index Quotes
// 9CWG89MGN8P5NZ7Q

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// stock API call
app.get('/stocks/:symbol', async (req: Request, res: Response) =>
{
    const {symbol} = req.params;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

    try{
        const response = await axios.get(url);
        res.json(response.data);
    }
    catch (error)
    {
        res.status(500).json({error: 'Failed'});
    }
}   

);
