
const express = require('express');
const app = express();
const port = process.env.port|| 3000;
const sequilize = require('./database/database')

app.use(express.json())
app.use(express.urlencoded({extended:true} ))




app.get('/list', async(req, res) => {
  
  await sequilize.authenticate();
  console.log('You are logged')
  res.send('eeee')
  
  
})



// app.use('/list',)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})