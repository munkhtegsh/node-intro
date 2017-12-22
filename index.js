const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); //middleware

const baseURL = '/api/people';

let people = [{id: 0, name: "Bryan"}];
let id = people.length ? people.slice(-1)[0].id + 1 : 0;


app.get(baseURL, (req, res) => {
	res.send(people);
});

app.get(`${baseURL}/:id`, (req, res) => {
	res.status(200).send(people[req.params.id]);
});

app.post(baseURL, (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	people.push({id, name});
	id++;
	res.status(200).send(people);
});

const port = 3000;
app.listen((port), () => {
	console.log(`The magics is happening on port ${port}`);
});

