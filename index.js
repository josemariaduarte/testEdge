const express=require('express');
const app=express();

// el puerto para correr
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=>{
  console.log('Corriendo en el puerto' + app.get('port'))
})