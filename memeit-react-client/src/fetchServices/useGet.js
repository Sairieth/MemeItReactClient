import { useState, useEffect } from "react";

const useGet = (url, token='') => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch(url, {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`,
                }})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch resource');
                    }
                    return res.json();
                })
                .then(data =>{
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setIsPending(false);
                    setError(err.message);
                })
    }, [url,token]);
    return {data,isPending,error};
}
export default useGet;