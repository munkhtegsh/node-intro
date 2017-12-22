const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller/people_controller');
app.use(bodyParser.json()); //middleware

const baseURL = '/api/people';

app.get(baseURL, controller.read);

app.get(`${baseURL}/:id`, controller.readById);
app.post(baseURL, controller.create);

const port = 3000;
app.listen((port), () => {
	console.log(`The magics is happening on port ${port}`);
});

