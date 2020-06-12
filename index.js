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
    useUnifiedTopology: true 
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

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Categoria Articulo API",
      description: "",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:3000"]
    }
  },
  // ['.routes/*.js']
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /api/categoria/list:
 *  get:
 *    title: "Categorias"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema: { $ref: "#/definitions/Categorias" }
 *      '400':
 *        description: Bad Request
 *      '500':
 *        description: Ocurrio un Error
 * 
 */


app.use('/api', router);

// el puerto para correr
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=>{
  console.log('Corriendo en el puerto' + app.get('port'))
})





/** 
* @swagger

  definitions: {
  id: {
    properties: {
      uuid: {type: "string"}
    }
  },
  Categoria: {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "nombre": {
                    "type": "string"
                },
                "descripcion": {
                    "type": "string"
                }
            }
        },
  "Categorias": {
    "type": "array",
    "items": { "$ref": "#/definitions/Categoria" }
  }
  
  }

*/