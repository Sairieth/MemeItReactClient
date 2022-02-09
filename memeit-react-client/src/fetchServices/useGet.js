import { useState, useEffect } from "react";

const useGet = (url, token='') => {
    const [data, SetData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url, {
                mode: "cors",
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`
                }})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch resource');
                    }
                    return res.json();
                })
                .then(data =>{
                    SetData(data)
                    SetIsPending(false)
                    SetError(null);
                })
                .catch(err =>{
                    SetIsPending(false);
                    SetError(err.message);
                })
        }, 1000);
    }, [url,token]);
    return {data,isPending,error};
}
export default useGet;