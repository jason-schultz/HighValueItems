import React, { createContext, useContext } from 'react';

type RequestProviderProps = { children: React.ReactNode }
export const RequestContext = createContext<
    {
        url: RequestInfo, 
        options?: RequestInit
    }
>({
    url: ''
})

export const useRequest = () => useContext(RequestContext)

export const RequstProvider = ({children}: RequestProviderProps) => {
    const value = useContext(RequestContext)
    return (
        <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
    )
}