const { checkSchema } = require("express-validator");
const { ObjectId } = require("mongodb");
let itemsValidator = {};

// Validacion ID para MongoDB
itemsValidator.validateId = checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "Campo debe ser un string valido" },
    custom: {
      options: async (value) => {
        if (value) {
          console.log({value})
          if (!ObjectId.isValid(value)) {
              return Promise.reject("El ID no es válido");
          }
        }
      },
    },
  },
})

// Validacion para crear un elemento
itemsValidator.createItem =  checkSchema({
    name: {
        in: "body",
        isString: { errorMessage: "Campo debe ser un string valido" },
        isLength: {
          options: { min: 5, max: 20 },
          errorMessage: "El nombre debe tener entre 5 y 20 caracteres",
        },
    },
    description: {
        in: "body",
        isString: { errorMessage: "Campo debe ser un string valido" },
        isLength: {
          options: { min: 5, max: 100 },
          errorMessage: "La descripción debe tener entre 5 y 100 caracteres",
        },
    }
})

// Validacion para actualizar un elemento
itemsValidator.updateItem =  checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "Campo debe ser un string valido" },
    custom: {
      options: async (value) => {
        if (value) {
          console.log({value})
          if (!ObjectId.isValid(value)) {
              return Promise.reject("El ID no es válido");
          }
        }
      },
    },
  },
  name: {
    in: "body",
    isString: { errorMessage: "Campo debe ser un string valido" },
    isLength: {
      options: { min: 5, max: 20 },
      errorMessage: "El nombre debe tener entre 5 y 20 caracteres",
    },
  },
  description: {
      in: "body",
      isString: { errorMessage: "Campo debe ser un string valido" },
      isLength: {
        options: { min: 5, max: 100 },
        errorMessage: "La descripción debe tener entre 5 y 100 caracteres",
      },
  }
})

module.exports = itemsValidator