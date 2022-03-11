const express= require('express');
const app = express()
app.use(express.json());
require('dotenv').config();



const crud= require('./controller/Crud');
app.use("/", crud);

port= process.env.PORT || 9888;
app.listen(port, () => {
    console.log('Connected to the database.');
});