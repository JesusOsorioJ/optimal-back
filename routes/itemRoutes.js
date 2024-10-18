const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const validator = require('../validators/itemValidator');
const errorHandler = require('../validators/errorHandler');

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del elemento
 *         name:
 *           type: string
 *           description: El nombre del elemento
 *         description:
 *           type: string
 *           description: La descripción del elemento
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: La fecha de creación del elemento
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Listar todos los elementos
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: Lista de todos los elementos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get('/', async (_, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Obtener un elemento por ID
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del elemento
 *     responses:
 *       200:
 *         description: El elemento solicitado por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Elemento no encontrado
 */
router.get('/:id', validator.validateId, errorHandler, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Crear un nuevo elemento
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: El nuevo elemento fue creado con éxito
 */
router.post('/', validator.createItem,errorHandler,  async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Actualizar un elemento por ID
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del elemento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Elemento actualizado
 */
router.put('/:id', validator.updateItem, errorHandler, async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Eliminar un elemento por ID
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del elemento
 *     responses:
 *       200:
 *         description: El elemento fue eliminado
 *       404:
 *         description: Elemento no encontrado
 */
router.delete('/:id',validator.validateId, errorHandler, async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
