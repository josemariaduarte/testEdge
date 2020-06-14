import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';


const router=routerx();



router.post('/add', categoriaController.add);
router.get('/:id', categoriaController.query);
router.get('/', categoriaController.list);
router.put('/:id', categoriaController.update);
router.delete('/remove',  categoriaController.remove);
router.put('/activate', categoriaController.activate);
router.put('/deactivate',  categoriaController.deactivate);

export default router;