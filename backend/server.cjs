// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// routes
app.post('/login', (req, res) =>
{
    console.log('|pong');
    const {username, password} = req.body;

    if (!username || !password)
    {
        return res.status(400).json({message: 'username & pass required'});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});