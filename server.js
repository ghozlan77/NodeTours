// const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"})


const port =process.env.PORT||3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
