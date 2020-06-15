import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth';
const router=routerx();

router.post('/add',usuarioController.add);
router.get('/:id',auth.verifyUsuario,usuarioController.query);
router.get('/',auth.verifyUsuario,usuarioController.list);
router.put('/:id',auth.verifyUsuario,usuarioController.update);
router.delete('/:id/remove',auth.verifyUsuario,usuarioController.remove);
router.put('/:id/activate',auth.verifyUsuario,usuarioController.activate);
router.put('/:id/deactivate',auth.verifyUsuario, usuarioController.deactivate);
router.post('/login',usuarioController.login);

export default router;