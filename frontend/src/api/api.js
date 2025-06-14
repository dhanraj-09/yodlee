import axios from "axios";


const URL="http://localhost:5000/yodlee";

export async function getProviders(req,res)
{
    const providers=await axios.get(URL+`/${getProviders}`);
    return res.json(providers);
}
