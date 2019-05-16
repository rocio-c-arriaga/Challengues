/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

/*app.all('/hello', (req, res) => res.send('Hello World!'));
app.all('/bye', (req, res) => res.send('Bye Bye!'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/taco',(req,res)=>{
    res.status(418).send ("pastor")
});

app.patch('/quesadilla',(req,res)=>{
    res.status(401).send ("con queso")
});

app.post('/agua',(req,res)=>{
    res.status(266).send ("de jamaica")
});*/

app.all('*', (req,res,next) => {
    console.log ('middleware',req.path)
    next()
});

app.get('/salut',(req,res) => {
    res.send("queeeeee?");
});

app.get('/salut',(req,res) => {
    res.send("cómo?");
});

app.get('/ciao',(req,res) => {
    res.send("seee yaaa");
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))






