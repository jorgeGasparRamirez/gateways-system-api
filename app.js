const express = require('express');
const app = express();
const sequilize = require('./database/database');
const bcrypt= require('bcrypt');
const User = require('./models/user');
const { rounds } = require('./config/auth')


app.use(express.json())
app.use(express.urlencoded({extended:true} ))

const auth = require('./middlewares/auth')

const userUser = require('./routes/user')
const userDevices = require('./routes/devices')
const userGateways = require('./routes/gateways')

sequilize.sync().then(()=>{
    User.create({
        email: 'root@gmail.com',
        password: bcrypt.hashSync('PeaceAndLove2022',parseInt(rounds))
    })
    console.log('Everything is ok')}).catch((error)=>console.log('It is not working sync'))

app.use('/login',userUser)

app.use('/gateways', auth, userGateways)
app.use('/gateways/:id',auth, userGateways)

app.use('/device', auth,userDevices)
app.use('/device/:idGateway/:idDevice',auth, userDevices)


app.listen(process.env.EXTERNAL_PORT || 3000)


