const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes.js');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'));

appRouter(app);

const server = app.listen(port, () => console.log(`Server running on port ${port}...`));
