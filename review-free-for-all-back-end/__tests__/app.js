const request = require('supertest')
const app = require('../app')

jest.mock('../models/product')
jest.mock('../models/review')

describe("App", ()=>{

  it("Lists products", ()=>{
    return request(app).get("/").then(response =>{
      expect(response.statusCode).toBe(200)
	  expect(response.body.product[0].name).toBe('Pencil')
    })
  })

  it("Creates products", ()=>{
    return request(app)
      .post("/add-product")
      .send({
        name: 'Pencil',
        description: "wood with a pointy end."
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body.product.name).toBe('Pencil')
        expect(response.body.product.description).toBe("wood with a pointy end.")
      })
  })

  it("Validates name when creating product", ()=>{
    return request(app)
      .post("/add-product")
      .send({
        description: 'wood with a pointy end.'
      })
      .then(response =>{
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('name')
        expect(error.msg).toBe('Is required')
      })
  })

  it("Validates description when creating product", ()=>{
    return request(app)
      .post("/add-product")
      .send({
        name: 'Pencil',
      })
      .then(response =>{
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('description')
        expect(error.msg).toBe('Is required')
      })
  })

  //Review Tests
  it("Creates reviews", ()=>{
    return request(app)
      .post("/product/:id")
      .send({
        productId: 1,
        review: "Eraser sucks"
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body.review.productId).toBe()
        expect(response.body.review.review).toBe("Eraser sucks")
      })
  })

  it("Validates review when creating review", ()=>{
	return request(app)
	  .post("/product/:id")
	  .send({
		review: ''
	  })
	  .then(response =>{
		expect(response.statusCode).toBe(400)
		const error = response.body.errors.validations[0]
		expect(error.param).toBe('review')
		expect(error.msg).toBe('Is required')
	  })
  })

})
