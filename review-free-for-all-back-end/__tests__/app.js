const request = require('supertest')
const app = require('../app')

jest.mock('../models/product')

describe("App", ()=>{
  //Products Index Test
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it("Lists products", ()=>{
    return request(app).get("/product").then(response =>{
      expect(response.statusCode).toBe(200)
	  expect(response.body.product[0].name).toBe('Pencil')
    })
  })

  it("Creates products", ()=>{
    return request(app)
      .post("/product")
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
      .post("/product")
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
      .post("/product")
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
  it("Tests the review path", ()=>{
    return request(app).get("/review").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
})
