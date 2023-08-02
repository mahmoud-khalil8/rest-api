import {Router} from 'express' 
import {body,validationResult} from 'express-validator'
import { handleInputErrors } from './modules/middleware';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
const router=Router() ;
/*product*/
router.get('/product',getProducts)
router.get('/product/:id',getOneProduct)
router.post('/product', body('name').isString(),handleInputErrors,createProduct, (req,res)=>{

})
router.put('/product/:id', body('name').isString(),handleInputErrors, (req,res)=>{

})
router.delete('/product/:id',deleteProduct)
/**
 * updates
 */
router.get('/update',getUpdates)
router.get('/update/:id',getOneUpdate)

router.post('/update',
body('body').exists().isString(),
body('title').exists().isString(),
body('productId').exists().isString(),
updateUpdate)


router.put('/update/:id',
body('body').optional(),
body('status').optional(),
body('version').optional(),
body('title').optional(),
createUpdate)
router.delete('/update/:id',deleteUpdate )
/**
 * updatepoint
 */
router.get('/updatepoint',()=>{})
router.get('/updatepoint/:id',()=>{})
router.post('/updatepoint',
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
()=>{})
router.put('/updatepoint/:id',
body('name').optional().isString(),
body('description').optional().isString(),
()=>{

})
router.delete('/updatepoint/:id',()=>{})
export default router ;