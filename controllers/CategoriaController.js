import models from '../models';
export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Categoria.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    /*
    * funcion que permite obtener una categoria 
    * @params {id} id de la categoria
    */
    query: async (req,res,next) => {
        try {
            const reg=await models.Categoria.findOne({_id:req.params.id}, {createdAt:0, __v:0, estado:0});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    /*
    * funcion para listar las categorias
    * @parms {valor}: permite buscar por nombre o descripcion ( no obligatorio)
    */
    list: async (req,res,next) => {
        try {
            let valor=req.query.valor;
            const reg=await models.Categoria.find({$or:[{'nombre':new RegExp(valor, 'i')},{'descripcion':new RegExp(valor, 'i')}]},
             {createdAt:0, __v:0}).sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate(
                {_id:req.params.id},
                {nombre:req.body.nombre},
                {descripcion:req.body.descripcion});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Categoria.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate({_id:req.params.id},{estado:1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate:async (req,res,next) => {
        try {
            const reg = await models.Categoria.findByIdAndUpdate({_id:req.params.id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
