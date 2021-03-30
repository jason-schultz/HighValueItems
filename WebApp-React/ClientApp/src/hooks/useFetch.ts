import { useEffect, useRef, useReducer } from 'react';

interface State<T> {
    status: 'init' | 'fetching' | 'error' | 'fetched',
    data?: T,
    error?: string
}

interface Cache<T> {
    [ url: string ]: T
}

type Action<T> = 
    | { type: 'request' }
    | { type: 'success', payload: T }
    | { type: 'failure', payload: string }

function useFetch<T = unknown>(url?: RequestInfo, init?: RequestInit) : State<T> {
    const cache = useRef<Cache<T>>({})
    const cancelRequest = useRef<boolean>(false)

    const initialState: State<T> = {
        status: 'init',
        error: undefined,
        data: undefined
    }

    //  Keep state logic seperated
    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch(action.type) {
            case 'request':
                return { ...initialState, status: 'fetching' }
            case 'success': 
                return { ...initialState, status: 'fetched', data: action.payload }
            case 'failure':
                return { ...initialState, status: 'error', error: action.payload }
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        if(!url) {
            return
        }

        const fetchData = async() => {
            dispatch({ type: 'request' })

            if(cache.current[url.toString()]) {
                dispatch({ type: 'success', payload: cache.current[url.toString()]})
            } else {
                try {
                    const response = await fetch(url, init)
                    const data = await response.json()

                    cache.current[url.toString()] = data

                    if(cancelRequest.current) return

                    dispatch({ type: 'success', payload: data })
                } catch(error) {
                    if(cancelRequest.current) return

                    dispatch({type: 'failure', payload: error.message})
                }
            }
        }

        fetchData()

        return () => {
            cancelRequest.current = true
        }
    }, [url, init])

    return state
}

export default useFetch