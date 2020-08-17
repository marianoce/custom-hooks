import React, { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({data: null, loading: true, error: null});
    const isMounted = useRef(true)
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: ''
        })

        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            setTimeout(() => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }
            }, 2000)
        })
        .catch(() => {
            setState({
                data: null,
                loading: false,
                error: 'error de api'
            });
        });

    }, [url]);

    return state;
}
