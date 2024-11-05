
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/test', (req, res) => res.send('Hello World!'));

app.get('/api/s3Url', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
