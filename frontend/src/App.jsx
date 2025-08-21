import {useEffect, useState} from "react";

import './App.css'
import {getProviders} from "./api/api.js";

function App() {

    const [data, setData] = useState(null)

    useEffect( () => {
        const fetchdata = async () => {
            const data = await getProviders();
            setData(data)
        }

        fetchdata();

    }, []);

    return(
        <>
            <div>
                <p>DATA WILL BE RENDERED HERE</p>
                <div>{JSON.stringify(data)}</div>
            </div>
        </>
    )
}

export default App
