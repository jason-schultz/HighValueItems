const request = (url: RequestInfo, options?: RequestInit) => {
    return fetch(url, options)
}

export default request