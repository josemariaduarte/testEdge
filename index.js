import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from './routes';

const app=express();
//
// conexion a la base de datos
mongoose.Promise=global.Promise;
const dbUrl = 'mongodb://localhost:27017/dbabm';
mongoose.connect(
  dbUrl, 
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(
    mongoose => console.log('conectado en el puerto 27017')
  ).catch(
    err => console.log(err)
  );

// usamos para desarrollo
app.use(morgan('dev'));
app.use(cors('dev'));
// 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

// el puerto para correr
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=>{
  console.log('Corriendo en el puerto ' + app.get('port'))
})
