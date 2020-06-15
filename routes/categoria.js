import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth';


const router=routerx();



router.post('/add', auth.verifyUsuario,categoriaController.add);
router.get('/:id', auth.verifyUsuario, categoriaController.query);
router.get('/', auth.verifyUsuario, categoriaController.list);
router.put('/:id', auth.verifyUsuario, categoriaController.update);
router.delete('/remove', auth.verifyUsuario, categoriaController.remove);
router.put('/:id/activate', auth.verifyUsuario,categoriaController.activate);
router.put('/:id/deactivate', auth.verifyUsuario,  categoriaController.deactivate);

export default router;