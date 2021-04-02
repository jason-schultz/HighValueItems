import { useEffect, useState } from 'react'
import { useRequest } from '../contexts/requestContext';

const useApiResult = (request: RequestInfo, options?: RequestInit) => {
    // const [results, setResults] = useState({});
    // const [error, setError] = useState({});

    // const requester = useRequest();

    // useEffect(() => {
    //     requester({url: request, options})
    //         .then(async (response: Response) => {
    //             if(response.ok) {
    //                 setResults(await response.json())
    //                 setError({});
    //             } else {
    //                 setError(await response.text())
    //             }
    //         })
    //         .catch((err) => {
    //             setError(err.message)
    //         })
    // }, [request, options, requester])

    // return [results, error]
}

export default useApiResult