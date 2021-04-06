interface HttpResponse<T> extends Response {
    parsedBody?: T
}

async function http<T>(endPoint: string, args: RequestInit): Promise<HttpResponse<T>> {
    //  This window.location.href will only work if the service end points are on the same server as the web app.
    const BASE_URL: string = window.location.href
    const response: HttpResponse<T> = await fetch(BASE_URL + endPoint,
        //  Default headers to application/json
        //  Allow args to overwrite if something else is needed 
        {
            headers: {
                'Content-Type': 'application/json'
            },
            ...args
        })

    try{
        response.parsedBody = await response.json()
    } catch (err) {}
    if(!response.ok) throw new Error(response.statusText)

    return response
}

export async function get<T>(endPoint: string, args?: RequestInit): Promise<HttpResponse<T>> {
    return await http<T>(endPoint, {
        method: 'post',
        ...args
    })
}

export async function post<T>(endPoint: string, body: any, args?: RequestInit): Promise<HttpResponse<T>> {
    return await http<T>(endPoint, {
        method: 'post', 
        body: JSON.stringify(body),
        ...args
    })
}

export async function put<T>(endPoint: string, body: any, args?: RequestInit): Promise<HttpResponse<T>> {
    return await http<T>(endPoint, {
        method: 'put',
        body: JSON.stringify(body),
        ...args
    })
}

export async function remove<T>(endPoint: string, body: any, args?: RequestInit): Promise<HttpResponse<T>> {
    return await http<T>(endPoint, { 
        method: 'delete',
        body: JSON.stringify(body),
        ...args
    })
}