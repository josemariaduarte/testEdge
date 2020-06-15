import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
  add: async (req,res,next) =>{
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const reg = await models.Usuario.create(req.body);
      res.status(200).json(reg);
    } catch (e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  query: async (req,res,next) => {
    try {
      const reg=await models.Usuario.findOne({_id:req.params.id});
      if (!reg){
        res.status(404).send({
          message: 'El registro no existe'
        });
      } else{
        res.status(200).json(reg);
      }
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  list: async (req,res,next) => {
    try {
      let valor=req.query.valor;
      const reg=await models.Usuario.find({$or:[{'nombre':new RegExp(valor,'i')},
          {'email':new RegExp(valor,'i')}]},{createdAt:0}).sort({'createdAt':-1});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  update: async (req,res,next) => {
    try {
      let pass = req.body.password;
      const req0 = await  models.Usuario.findOne({_id:req.params.id});
      // si el pass es diferente a lo que tenia anteriormente, entonces se encripta
      if (pass!= req0.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const reg = await models.Usuario.findByIdAndUpdate({_id:req.params.id},
        {rol:req.body.rol,
          nombre:req.body.nombre,
          tipo_documento:req.body.tipo_documento,
          num_documento:req.body.num_documento,
          direccion:req.body.direccion,
          telefono:req.body.telefono,
          password:req.body.password});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
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
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  activate: async (req,res,next) => {
    try {
      const reg = await models.Usuario.findByIdAndUpdate({_id:req.params.id},{estado:1});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  deactivate:async (req,res,next) => {
    try {
      const reg = await models.Usuario.findByIdAndUpdate({_id:req.params.id},{estado:0});
      res.status(200).json(reg);
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  },
  login: async (req,res,next) => {
    try {
      let user = await models.Usuario.findOne({email:req.body.email,estado:1});
      if (user){
        let match = await bcrypt.compare(req.body.password,user.password);
        if (match){
          // aqui se crea el token con el id, rol y el email del usuairo
          let tokenReturn = await token.encode(user._id, user.rol, user.email);
          res.status(200).json({user,tokenReturn});
          // res.json('Password Correcto')
        } else{
          res.status(404).send({
            message: 'Password Incorrecto'
          });
        }
      } else{
        res.status(404).send({
          message: 'No existe el usuario'
        });
      }
    } catch(e){
      res.status(500).send({
        message:'OcurriÃ³ un error'
      });
      next(e);
    }
  }
}