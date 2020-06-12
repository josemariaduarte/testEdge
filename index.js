
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');

const app=express();
// usamos para desarrollo
app.use(morgan('dev'));
app.use(cors('dev'));
// 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// el puerto para correr
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), ()=>{
  console.log('Corriendo en el puerto' + app.get('port'))
})