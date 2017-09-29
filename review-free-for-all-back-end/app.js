var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var Product = require('./models').Product;
var Review = require('./models').Review;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
  Product.findAll().then((product) =>{
    res.json({product:product})
  })
})

app.post('/add-product', (req, res) => {
	req.checkBody('name', 'Is required').notEmpty()
	req.checkBody('description', 'Is required').notEmpty()
  	req.getValidationResult()
    .then((validationErrors) =>{
  	if(validationErrors.isEmpty()){
  	Product.create({
    name: req.body.name,
    description: req.body.description
}).then((product)=>{
    res.status(201)
    res.json({product: product})
})
	}else{
		res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
	}
  })
})

app.post('/product/:id', (req, res) => {
	req.checkBody('review', 'Is required').notEmpty()
  	req.getValidationResult()
    .then((validationErrors) =>{
  	if(validationErrors.isEmpty()){
  	Review.create({
    review: req.body.review,
}).then((review)=>{
    res.status(201)
    res.json({review: review})
})
	}else{
		res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
	}
  })
})

app.get('/product/:id', (req, res) => {
	Review.findAll({
		where: {
			id: req.params["id"],
		}
	}).then((product) => {
		res.json(product)
	})
})

module.exports = app
