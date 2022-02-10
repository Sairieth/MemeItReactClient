import { useState, useEffect } from "react";

const usePost = (url,dataToSend, token = '') => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url, {
                method: "POST",
                credentials:'include',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(dataToSend)
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url, token, dataToSend]);
    return { data, isPending, error };
}
export default usePost;