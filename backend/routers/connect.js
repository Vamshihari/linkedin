const express = require('express'); // express module
const mongoose = require('mongoose'); // mongoose module
const app = express();
const url = 'mongodb+srv://vamshi0239:vamshihari99@cluster0.xvz8j.mongodb.net/users?retryWrites=true&w=majority'


mongoose.connect(url , {useNewUrlParser:true}).then(()=>{
  console.log('connection success')
})

app.listen(1109, function(){
    console.log('server started')
  })
  
const con = mongoose.connection;

con.on('open', function(){
  console.log('connected...')
})

app.use(express.json())

const userRouter = require('./logic');  //path
app.use('/', userRouter);
