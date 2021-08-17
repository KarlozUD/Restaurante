const express =require('express');
const server= express();

//ejs
server.set('view engine', 'ejs');

server.use(express.urlencoded({extended:false}));
server.use(express.json());

server.use('/', require('./router'));


server.listen(5000, ()=>{
    console.log('server on port 5000');
})

