const express = require('express');
const app = express();
const getImage = require('./index');

app.use(express.static('public')); 

app.get('/get-gif', async (req, res) => {
    const query = req.query.query;
    const gifUrl = await getImage(query);
    res.json({ gifUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
