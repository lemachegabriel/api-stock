require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//////////////////////////////////////////////

const app = express();
app.use(express.json());
app.use(cors())

//////////////////////////////////////////////

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/data", {useUnifiedTopology:true, useNewUrlParser:true}).then(() => {
    console.log("sucsess");
}).catch((err) => {
    console.log("error:"+err)
})
require('./src/model/routes')

//////////////////////////////////////////////

app.use("/api", require('./src/routes'));

app.listen(process.env.PORT || 8081, function(){
    console.log("server running http://localhost:8081");
});