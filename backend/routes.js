const express=require('express');
const axios= require('axios');
const router=express.Router();

const client_id=process.env.YODLEE_CLIENT_ID;
const secret=process.env.YODLEE_SECRET;
const login_name=process.env.YODLEE_LOGIN_NAME

console.log("Yodlee Client ID:", process.env.YODLEE_CLIENT_ID);
console.log("Yodlee Secret:", process.env.YODLEE_SECRET);
console.log("Yodlee login name:",process.env.YODLEE_LOGIN_NAME);


router.post('/getAppToken', async (req,res)=>{
    try
    {
        const formdata = new URLSearchParams();
        formdata.append("clientId",client_id);
        formdata.append("secret",secret);
        const response = await axios.post("https://sandbox.api.yodlee.com/ysl/auth/token",formdata.toString(),{ headers:{
                "Api-Version":"1.1",
                "Content-Type":"application/x-www-form-urlencoded",
                "loginName":login_name,
            }})
        const accessToken = response.data.token.accessToken;

        res.json({ accessToken });
    }
    catch(error)
    {
        console.log(client_id,"client")
        console.log(secret,"secret")
        console.log(login_name,"login name")
        if (error.response) {
            console.error("Error Status:", error.response.status);
            console.error("Error Headers:", error.response.headers);
            console.error("Error Data:", error.response.data);
        } else {
            console.error("Generic Error:", error.message);
        }
        res.status(500).json({ error: 'Failed to get access token' });
    }
})


module.exports=router;