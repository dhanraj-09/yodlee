import axios from "axios";


const URL="http://localhost:5000/yodlee/";

export async function getProviders()
{
    const response1 = await axios.post(`${URL}GetAccessToken`);
    const token = response1.data.token.accessToken;
    console.log(token)
    localStorage.setItem("AccessToken",token);


    const response3 = await axios.get(`${URL}getProviders`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("AccessToken")}`
        }
    });

    console.log(localStorage.getItem("AccessToken"));

    const response4 = await axios.get(`${URL}transactions`,{
        headers:{
            'Api-Version':'1.1',
            'Authorization':`Bearer ${localStorage.getItem("AccessToken")}`
        }
    })

    return response4.data;

}
