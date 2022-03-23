import { useState, useEffect } from "react";

const useGet = (url, token='') => {
    const [getData, setGetData] = useState(null);
    const [isGetPending, setIsGetPending] = useState(true);
    const [getError, setGetError] = useState(null);

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
                    setGetData(data);
                    setIsGetPending(false);
                    setGetError(null);
                })
                .catch(err =>{
                    setIsGetPending(false);
                    setGetError(err.message);
                })
    }, [url,token]);
    return {getData,isGetPending,getError};
}
export default useGet;