const {findType, getData, addElement, getElementById, getElementByName, deleteElement, updateElement} = require('./envelope');
const envRouter = require('express').Router();


const models = ['grocery', 'dining', 'household']; 


envRouter.get('/', (req, res) => {
	let budgets = []
	for (m of models) {
		budgets.push(findType(m));
	}
	res.send(`grocery budget: ${budgets[0].budget}, spend: ${budgets[0].spend}.
		dining budget: ${budgets[1].budget}, spend: ${budgets[1].spend}.
		household budget: ${budgets[2].budget}, spend: ${budgets[2].spend}.`)
});
	
var model;
envRouter.use((req, res, next) => {
	if (req.path.startsWith('grocery',1)){
		req.model = 'grocery';
	} else if (req.path.startsWith('dining',1)){
		req.model = 'dining';
	} else if (req.path.startsWith('household',1)){
		req.model = 'household';
	} else {
		res.status(404).send();
	}
	next();
});

envRouter.get('/:model', (req, res) => {
	res.status(200).send(getData(req.model))
});

envRouter.get('/:model/:id', (req, res) => {
	const ele = getElementById(req.model, req.params.id);
	if (ele){
		res.send(ele);
	}
})


envRouter.post('/:model', (req, res, next) => {
	res.status(201).send(addElement(req.model, req.body))
})

envRouter.put('/:model', (req, res, next) => {
	const prom = new Promise((resolve, reject) => {
		const ele = updateElement(req.model, req.body);
		if (ele) {
			resolve(ele);
		} else{
			res.status(404).send();
		}
	}).then((result) => {
		res.send(result);	
	});
})

envRouter.delete('/:model', (req, res) => {
	const deleted = deleteElement(req.model, req.body);
	if (deleted) {
		res.status(200).send();
	} else{
		res.status(500).send();
	}
})

module.exports = envRouter;