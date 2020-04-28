const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 4000);
//middleware
app.use(express.json());
app.use(cors());//Permite entradas externas al servidor
//Routes
app.use(require('./routes/actor'));
app.use(require('./routes/movie'));
//Execution
app.listen(app.get('port'),()=>console.log(`server running on ${app.get('port')}`));
