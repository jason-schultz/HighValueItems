import { ContentItem } from '../models/ContentItem'


class API {

    constructor(private BASE_ROUTE: string = window.location.href) {}

    async get(endpoint: string): Promise<Array<ContentItem>> {
        const response = await fetch(this.BASE_ROUTE + `${endpoint}`)

        return response.json()
    }

    async post(endpoint: string, data: ContentItem): Promise<ContentItem> {
        const response = await fetch(this.BASE_ROUTE + `${endpoint}`, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        return response.json()
    }

    async delete(endpoint: string): Promise<Response> {
        const response = await fetch(this.BASE_ROUTE + `${endpoint}`, {
            method: 'DELETE',
        }
        )

        return response
    }
}

export default API
