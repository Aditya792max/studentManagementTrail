const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});



const mongoURL = process.env.MONGO;
console.log("<<<<<This is an authentic version check Test ^_^ >>>>>");

mongoose.connect(mongoURL)
     .then(() => {
          console.log('✅✅✅ Connected to MongoDB');
     })
     .catch((err) => {
          console.error('❌❌❌Error connecting to MongoDB:', err);
     });



const studentRoutes = require('./Routes/StudentRoutes.js'); // adjust path if needed
app.use('/', studentRoutes);

