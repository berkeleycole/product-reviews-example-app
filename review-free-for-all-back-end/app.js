var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var Product = require('./models').Product;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())

Product.create({
  name: 'Pencil',
  description: 'wood with a pointy end.'
}).then(function(product){
  console.log(product.get())

  return product.createReview({
    review: 'Very sharp!',
  })
})
.then(function(review){
  console.log("New Review", review.get())
}).catch(function(error){
  console.log(error)
})

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});

app.get('/product', (req, res) => {
  Product.findAll().then( (product) =>{
    res.json({product:product})
  })
})

app.post('/product', (req, res) => {
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

module.exports = app
