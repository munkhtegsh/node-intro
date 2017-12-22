let people = [{id: 0, name: "Bryan"}];
let id = people.length ? people.slice(-1)[0].id + 1 : 0;

module.exports = {
	read: (req, res) => {
		res.send(people);
	},

	readById: (req, res) => {
		res.status(200).send(people[req.params.id]);
	},

	create: (req, res) => {
		console.log(req.body);
		const { name } = req.body;
		people.push({id, name});
		id++;
		res.status(200).send(people);
	}
}