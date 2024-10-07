const express = require("express");
const { connectToMongoDb } = require("./config/connection");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

connectToMongoDb(process.env.MONGO_URL).then(()=>{
    console.log("MongoDb connected");
}).catch((err)=>{
    console.log(`connection failed err : ${err}`)
})

app.use(express.json());

app.use("/", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
