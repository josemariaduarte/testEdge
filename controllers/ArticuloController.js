import models from '../models';
export default {
  add: async (req,res,next) =>{
    try {
      const reg = await models.Articulo.create(req.body);
      res.status(200).json(reg);
    } catch (e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  },
  // permite obtener el articulo en base al id
  query: async (req,res,next) => {
    try {
      const reg=await models.Articulo.findOne({_id:req.params.id})
        .populate('categoria',{nombre:1});
      if (!reg){
        res.status(404).send({
          message: 'El registro no existe'
        });
      } else{
        res.status(200).json(reg);
      }
    } catch(e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  },
  // obtenemos el listado de los articulos
  list: async (req,res,next) => {
    try {
      let valor=req.query.valor;
      const reg=await models.Articulo.find({$or:[{'nombre':new RegExp(valor,'i')},
          {'descripcion':new RegExp(valor,'i')}]},{createdAt:0, __v:0}).populate('categoria',{nombre:1})
        .sort({'createdAt':-1});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  },
  // actualizacion de un articulo
  // se recibe como parametro el id del articulo
  update: async (req,res,next) => {
    try {
      const reg = await models.Articulo.findByIdAndUpdate({_id:req.params.id},
        {categoria:req.body.categoria,
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio_venta:req.body.precio_venta,
        stock:req.body.stock});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  },
  remove: async (req,res,next) => {
    try {
        const reg = await models.Articulo.findByIdAndDelete({_id:req.params.id});
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
      const reg = await models.Articulo.findByIdAndUpdate({_id:req.params.id},{estado:1});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  },
  deactivate:async (req,res,next) => {
    try {
      const reg = await models.Articulo.findByIdAndUpdate({_id:req.params.id},{estado:0});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'Ocurrio un error'
      });
      next(e);
    }
  }
}