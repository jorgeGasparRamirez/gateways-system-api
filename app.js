
const express = require('express');
const app = express();
const sequilize = require('./database/database');


app.use(express.json())
app.use(express.urlencoded({extended:true} ))


// const userRoutes = require('./routes/user')
const userGateways = require('./routes/gateways')

sequilize.sync()

app.use('/gateways', userGateways)
app.use('/gateways/:id', userGateways)

app.listen(process.env.EXTERNAL_PORT || 3000)


