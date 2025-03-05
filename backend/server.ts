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

// default tickers
const tickers = ['SPY', 'QQQ', 'DIA'];

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

// Populate Index tickers on server start and store in cache

// return percent change
//  [  (current price) - (yesterday's close)] / (yesteday's close) x 100 


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// stock API call
app.get('/stocks/:symbol', async (req: Request, res: Response) =>
{
    const {symbol} = req.params;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    console.log("request made for: ", symbol);

}   

);

// temporary route to get fake deltas
app.get('/stock/:symbol/delta', async (req: Request, res: Response) =>
{
    const {symbol} = req.params;
    console.log("|Delta Request for: ", symbol);
    res.status(200).json({delta: 1.5});
});