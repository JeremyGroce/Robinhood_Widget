// dependencies
import express, { Request, Response } from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
