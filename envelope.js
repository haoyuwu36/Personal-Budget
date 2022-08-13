

const grocery_transactions = [];
let grocery_budget = 100;
let grocery_spend = 0;
let grocery_id = 1;

const dining_transactions = [];
let dining_budget = 100;
let dining_spend = 0;
let dining_id = 1;

const household_transactions = [];
let household_budget = 100;
let household_spend = 0;
let household_id = 1;


const db = {
	grocery: {
		transactions: grocery_transactions,
		budget: grocery_budget,
		spend: grocery_spend,
		id: grocery_id
	},
	dining: {
		transactions: dining_transactions,
		budget: dining_budget,
		spend: dining_spend,
		id: dining_id
	},
	household: {
		transactions: household_transactions,
		budget: household_budget,
		spend: household_spend,
		id: household_id
	}
};

const findType = (model) => {
	switch (model){
		case 'grocery':
			return db.grocery;
		case 'dining':
			return db.dining;
		case 'household':
			return db.household;
		default:
			return null;
	}
}

const isValid = (instance) => {
	instance.name = instance.name || '';
	instance.note = instance.note || '';
	if (typeof instance.name !== 'string' && typeof instance.amount !== 'Numbers' && typeof instance.note !== 'string'){
		throw new Error('invalid input syntax: name and note must be string, and amount must be number!');
	}
	else {
		return true;
	}
}

const getData = (model) => {
	let type = findType(model);
	if (type !== null) {
		return type.transactions;
	}
	else {
		throw new Error('Spending type does not exist.')
	}
}

const addElement = (model, instance) => {
	if (isValid(instance)){
		model = findType(model);
		instance.id = model.id++;
		model.transactions.push(instance);
		model.budget += -instance.amount;
		model.spend += instance.amount;
		return model.transactions[model.transactions.length - 1];
	}
}

const getElementById = (model, id) => {
	let data = findType(model).transactions;
	ele = data.find((d) => {
		return d.id === Number(id)
	});
	if (ele){
		return ele;
	}
	throw new Error('id does not exist');
}

const getElementByName =(model, name) => {
	let data = findType(model).transactions;
	data = data.filter((d) => {
		return (d.name === name);
	});
	return data;
}

const updateElement = (model, instance) => {
	if (isValid(instance)){
		model = findType(model);
		let data = model.transactions;
		const eleIndex = data.findIndex((d) => {
			return d.id === instance.id;
		});
		if (eleIndex !== -1){
			model.budget += -(instance.amount - data[eleIndex].amount);
			model.spend += (instance.amount - data[eleIndex].amount)
			data[eleIndex] = instance;
			return data[eleIndex];
		} else {
			return null;
		}
	}
}

const deleteElement = (model, instance) => {
	model = findType(model);
	let data = model.transactions;
	const eleIndex = data.findIndex((d => {
		return d.id === instance.id;
	}));
	if (eleIndex !== -1){
		model.budget += data[eleIndex].amount;
		model.spend += -data[eleIndex].amount;
		data.splice(eleIndex,1);
		return true;
	} else {
		return false;
	}
}

addElement('grocery', {
	"name": "flowers",
    "amount": 8,
    "note": "flowers as gift for Meng."
});

addElement('grocery', {
	"name": "milk",
	"amount": 1,
	"note": "one spoonful of milk."
})

addElement('household', {
	"name": "mop",
	"amount": 50,
})

module.exports = {findType, getData, getElementByName, getElementById, updateElement, deleteElement, addElement};