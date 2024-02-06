import { exchangeInstance } from "@/AxiosInstance/axiosInstance";

export const getExchange = async() => {
    const res = await exchangeInstance.get("/")
    return res.data.data
}

export const getSingleExchange = async(id : string | string[] | undefined) => {
    
        const res = await exchangeInstance.get(`/${id}`)
        return res.data.data
    
}

