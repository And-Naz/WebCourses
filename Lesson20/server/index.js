const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8000;
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

let userList = [{id: 1, name: 'John'}, {id: 2, name: 'Same'}, {id: 3, name: 'Tom'}];

app.get("/", (req, res) => {
	if (req.query.id) {
		const id = Number(req.query.id)
		if (!Number.isNaN(id)) {
			const foundUser = userList.find(user => user.id === id)
			return res.json(foundUser)
		}
	}
	
	res.json(userList)
});

app.post("/", (req, res) => {
	const id = userList.length + 1;
	const newUser = { ...req.body, id };
	userList.push(newUser)
	res.json(id)
});

app.put("/", (req, res) => {
	const { id } = req.body;
	const userId = Number(id);
	if (Number.isNaN(userId)) {
		return res.status(400).send("Invalid Id")
	}
	const index = userList.findIndex(user => user.id === userId)
	if (index === -1) {
		return res.status(404).send("Undefined User")
	}
	userList[index] = {...req.body}
	
	res.json(userList[index]);
});

app.patch("/", (req, res) => {
	const { id, ...updateInfo } = req.body;
	const userId = Number(id);
	if (Number.isNaN(userId)) {
		return res.status(400).send("Invalid Id")
	}
	const index = userList.findIndex(user => user.id === userId)
	if (index === -1) {
		return res.status(404).send("Undefined User")
	}
	
	Object.keys(updateInfo).forEach(key => {
		userList[index][key] = updateInfo[key]
	})

	res.json(userList[index]);
});

app.delete("/", (req, res) => {
	if (!req.query.id) {
		return res.status(404).send()
	}
	const id = Number(req.query.id)
	if (Number.isNaN(id)) {
		return res.status(400).send("Id must be number")
	}
	userList = userList.filter(user => user.id !== id)
	res.send("OK");
});

app.listen(PORT, () => {
	console.log(`Server run on ${PORT} port!`);
});