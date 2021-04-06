import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { displayError } from '../state/errorSlice'

const useFetchData = (url: string, options: any) => {
    //const dispatch = useDispatch()
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const doFetch = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                if(!signal.aborted) {
                    setResponse(json)
                }
            } catch(e) {
                if(!signal.aborted) {
                    //dispatch(displayError(e))
                    setError(e)
                }
            } finally {
                if(!signal.aborted) {
                    setLoading(false)
                }
            }
        }
        doFetch()

        return () => {
            abortController.abort()
        }
    }, [options, url])

    return { response, error, loading }
}

export default useFetchData