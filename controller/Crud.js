const express= require('express');
const app= express();
const db = require("../db");

//create Database
app.get('/createdb', async(req, res) => {
    try{
        let createdb= `create database nodedb`;
        await db.query(createdb);
        res.send('Database create.');
    }catch(error){
        console.log(error);
    }
});

//create table
app.get('/createTable', async(req, res) => {
    try{
        let tableQuery= `create table customer(id int primary key AUTO_INCREMENT, name varchar(23), age int ,address varchar(20))`;
        await db.query(tableQuery);
        res.send('Table created.');
    }catch(error){
        console.log(error);
    }
});

//insert into table
app.post('/insertintoTable', async(req, res) => {
    try{
        let insertQuery = `insert into customer set id = ?, name = ?, age = ?, address = ?`;
        const replacements = [req.body.id, req.body.name, req.body.age, req.body.address];
        await db.query(insertQuery, replacements);
        res.send('New Data Inserted.');
    }catch(error){
        console.log(error);
    }
});

//update content of table
app.put('/updatedata', async(req, res) => {
    try{
        let updateQuery= `update customer set age = ? where id = ?`;
        const replacements= [76, 1];
        await db.query(updateQuery, replacements);
        res.send('Data Updated.');
    }catch(error){
        console.log(error);
    }
});
//delete content of table
app.delete('/deletedata', async(req, res) => {
    try{
        let deleteQuery= `delete from customer where id = ?`;
        const replacements= [1];
        await db.query(deleteQuery, replacements);
        res.send('Data deleted.');
    }catch(error){
        console.log(error);
    }
});


module.exports= app;

