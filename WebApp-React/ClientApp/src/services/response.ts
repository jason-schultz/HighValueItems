export function handleResponse(response: Response) {
    if(response.results) {
        return response.results;
    }

    if(response.data) {
        return response.data;
    }

    return response;
}

export function handleError(error: Error) {
    if(error.data) {
        return error.data;
    }

    return error;
}