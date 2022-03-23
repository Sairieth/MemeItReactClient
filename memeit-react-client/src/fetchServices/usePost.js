import { useState, useCallback } from "react";

const usePost = (url, contentType = '', token = '') => {
    const [postState, setPostState] = useState({
        data: null,
        isPostPending: false,
        postError: null
    })
    // utánanézni -> useCallback()
    const request = useCallback((dataToSend) => {

        const payload = contentType === 'application/json'
            ? JSON.stringify(dataToSend)
            : dataToSend
            
        if (dataToSend !== null) {
            setPostState((prevState) => {
                return {
                    ...prevState,
                    isPostPending: true
                }
            });
            //if (contentType !== 'application/json') {
                // console.log('data: ', dataToSend.getAll('title'))
                // console.log('data: ', dataToSend.getAll('tag'))
                // console.log('data: ', dataToSend.getAll('userId'))
                // console.log('payload: ', payload.getAll('title'))
            //}
            fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': contentType
                },
                body: payload
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch resource');
                    }
                    return res.json();
                })
                .then(data => {
                    //console.log(data);
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
    }, [url, contentType, token])
    return { ...postState, request };
}
export default usePost;