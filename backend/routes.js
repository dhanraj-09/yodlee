const express=require('express');
const axios= require('axios');
const {response} = require("express");
const router=express.Router();

const client_id=process.env.YODLEE_CLIENT_ID;
const secret=process.env.YODLEE_SECRET;
const login_name=process.env.YODLEE_LOGIN_NAME;
const admin_login_name=process.env.YODLEE_ADMIN_LOGIN_NAME;

console.log("Yodlee Client ID:", process.env.YODLEE_CLIENT_ID);
console.log("Yodlee Secret:", process.env.YODLEE_SECRET);
console.log("Yodlee login name:",process.env.YODLEE_LOGIN_NAME);
let accessToken;
let userToken;

router.post('/GetAccessToken', async (req,res)=>{
    try
    {
        const formdata = new URLSearchParams();
        formdata.append("clientId",client_id);
        formdata.append("secret",secret);
        const response1 = await axios.post("https://sandbox.api.yodlee.com/ysl/auth/token",formdata.toString(),{ headers:{
                "Api-Version":"1.1",
                "Content-Type":"application/x-www-form-urlencoded",
                "loginName":login_name,
            }})
        console.log(response1.data)
        res.json(response1.data);
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

router.post('/getUserToken',async (req,res)=>{
    try
    {
        const format = new URLSearchParams();
        format.append("clientId",client_id);
        format.append("secret",secret);
        const response2=await axios.post('https://sandbox.api.yodlee.com/ysl/auth/token',format.toString(),{
            headers:{
                'Api-Version':'1.1',
                'loginName':admin_login_name,
            }
        })
        userToken=response2.data.token.accessToken;
        console.log(userToken, "UserToken");
        res.json({userToken})
    }
    catch (error)
    {
        if (error.response) {
            console.error('Error Status:', error.response.status);
            console.error('Error Data:', error.response.data);
        } else {
            console.error('Generic Error:', error.message);
        }
        res.status(500).json({ error: 'Failed to get user session token' });
    }
})

router.get('/getProviders', async (req, res) => {
    try {
        const URL = `https://sandbox.api.yodlee.com/ysl/providers`;
        const response = await axios.get(URL,{
            headers:{
                'Authorization': req.headers.authorization,
                'Api-Version':'1.1'
            }
        });

        res.json(response.data);
    } catch (error) {
        if (error.response)
        {
            console.log("Status",error.response.status)
            console.error('FastLink Error:', error.response.data);
        } else {
            console.error('Generic Error:', error.message);
        }
        res.status(500).json({ error: 'Failed to get FastLink token' });
    }
});

    router.get('/accounts', async (req,res)=>{
    try
    {
        const URL="https://sandbox.api.yodlee.com/ysl/accounts";

        const response = await axios.get(URL,{
            headers : {
                'Api-Version':'1.1',
                'Authorization':`Bearer ${req.headers.authorization.toString().split(' ')[1]}`
            }
        });

        res.json(response.data)
    }
    catch (err)
    {
        if (err.response) {
            console.error("Error Status:", err.response.status);
            console.error("Error Headers:", err.response.headers);
            console.error("Error Data:", err.response.data);
        } else {
            console.error("Generic Error:", err.message);
        }
        res.status(500).json({ error: 'Failed to get access accounts' });
    }
});

    router.get("/transactions",async (req,res)=>{
        try
        {
            const response = await axios.get("https://sandbox.api.yodlee.com/ysl/transactions?accountIdhttps://sandbox.api.yodlee.com/ysl/transactions",
                {
                 headers:{
                     'Api-Version':'1.1',
                     'Authorization':`Bearer ${req.headers.authorization.toString().split(' ')[1]}`
                 },
                 params:
                     {
                         accountId: "12538544",
                         fromDate: "2010-01-01"
                     }
                })
            res.json(response.data)
        }
        catch (err)
        {
            if (err.response) {
                console.error("Error Status:", err.response.status);
                console.error("Error Headers:", err.response.headers);
                console.error("Error Data:", err.response.data);
            } else {
                console.error("Generic Error:", err.message);
            }
            res.status(500).json({ error: 'Failed to get access transactions' });
        }

    })














module.exports=router;