import { Router } from 'express'
const router = Router();

import * as productoCtr from '../controllers/producto.controller'
const { checkToken } = require('../auth/token_validation');
router.post('/', checkToken, productoCtr.createProducto);
router.put('/:id', checkToken, productoCtr.updateProducto);
router.get('/', checkToken, productoCtr.readAllProductos);
router.get('/:id', checkToken, productoCtr.readProductos);
router.delete('/:id', checkToken, productoCtr.delProducto);


export default router;