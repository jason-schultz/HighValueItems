import { handleResponse, handleError } from './response';

const BASE_URL = window.location.href + '/api/v1';

const getAll = async (resource: string) => {
    await fetch(`${BASE_URL}/${resource}`)
        .then(handleResponse)
        .catch(handleError);
}


const getOne = async (resouce: string, id: number) => {
    await fetch(`${BASE_URL}/${resouce}/${id}`)
        .then(handleResponse)
        .catch(handleError)
}
