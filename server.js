const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({ products: [] });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));