require('dotenv').config();
const express= require("express");
const app=express();
const cors=require("cors")

const YodleeRoutes=require("./routes");


app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/yodlee',YodleeRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});