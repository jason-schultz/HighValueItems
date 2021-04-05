import { useDispatch } from "react-redux"
import { displayError } from "../state/errorSlice"

interface HttpResponse<T> extends Response {
    parsedBody?: T
}

export default class Http<T> {
    private dispatch = useDispatch()

    constructor(private BASE_URL: string = window.location.href + 'api/v1') {}

    private handleError(res: HttpResponse<T>) 
    {
        const errString = `Status: ${res.statusText}` + `\nError: ${res.text}`
        this.dispatch(displayError(errString))
    }

    async Post(endPoint: string, slug: any): Promise<HttpResponse<T>> {

        const res: HttpResponse<T> = await fetch(this.BASE_URL + endPoint, {
            method: 'post',
            body: JSON.stringify(slug)
        })

        try {
            res.parsedBody = await res.json()
        } catch(ex) {}
        if(!res.ok) this.handleError(res)

        return res
    }

    async Get(endPoint: string): Promise<HttpResponse<T>> {
        const res: HttpResponse<T> = await fetch(endPoint, { method: 'get' })
        try {
            res.parsedBody = await res.json()
        } catch(ex) {}

        if(!res.ok)
            this.handleError(res)
        
        return res
    }
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const dispatch = useDispatch()
    const response: HttpResponse<T> = await fetch(request)
    
    try {
        response.parsedBody = await response.json()
    } catch (ex) {}

    if(!response.ok) {
        const errorString = `Status ${response.statusText}` + `\nError: ${response.text}`
        dispatch(displayError(errorString))
    }
    return response
}