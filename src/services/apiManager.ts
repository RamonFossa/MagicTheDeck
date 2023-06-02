import axios from 'axios';

type ResponseAPI = {
    error: boolean,
    status: string,
    data: any
}

const apiResponse = (data: any | string, error: boolean, status: string): ResponseAPI => {

    return {
        error: error,
        data: data,
        status: status
    }
}

export const getCard = async (name: string, language?: string): Promise<ResponseAPI> => {
    console.log('getCard => Entrou na função')
    const paramethers = language ? `name=${name}&language=${language}` : `name=${name}`
    try {
        const response = await axios({
            method: "get",
            url: `https://api.magicthegathering.io/v1/cards?${paramethers}`,
        })
        return apiResponse(response.data, false, "200");
    } catch (error) {
        console.error(JSON.stringify(error.response.data, null, 2));
        return apiResponse(error.response, true, error.status);
    }
}

export const getCardById = async (id: string): Promise<ResponseAPI> => {
    console.log('getCardById => Entrou na função')
    
    try {
        const response = await axios({
            method: "get",
            url: `https://api.magicthegathering.io/v1/cards/${id}`,
        })
        return apiResponse(response.data, false, "200");
    } catch (error) {
        console.error(JSON.stringify(error.response.data, null, 2));
        return apiResponse(error.response, true, error.status);
    }
}

// 156929