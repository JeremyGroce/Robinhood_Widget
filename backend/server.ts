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

// sample API data
app.get('/stocks/:symbol', async (req: Request, res:Response) =>
{
    const {symbol} = req.params;
    console.log("|Request made for: ", symbol);
    const value = 150;
    const delta = 1.5;

    res.status(200).json({value: value, delta: delta});
});

// sample chart data
app.get('/stocks/:symbol', async (req: Request, res: response) =>
{

});