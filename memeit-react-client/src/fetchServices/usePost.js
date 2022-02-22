import { useState, useCallback } from "react";

const usePost = (url, token = '') => {
    const [postState, setPostState] = useState({
        data: null,
        isPostPending: false,
        postError: null
    })

    // utánanézni -> useCallback()
    const request = useCallback((dataToSend) => {

        if (dataToSend !== null) {
            setPostState((prevState) => {
                return {
                    ...prevState,
                    isPostPending: true
                }
            });
            fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setPostState({
                        data: data,
                        isPostPending: false,
                        postError: null
                    })
                })
                .catch(err => {
                    setPostState({
                        data: null,
                        isPostPending: false,
                        postError: err.name
                    })
                })
        };
    }, [url, token])
    return { ...postState, request };
}
export default usePost;