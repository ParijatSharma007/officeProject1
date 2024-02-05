import { marketInstance } from "@/AxiosInstance/axiosInstance";

export async function getSingleMarket (id : string|string[]|undefined|null = null) {
    if(id){
        const res = await marketInstance.get(`/${id}`)
        return res.data.data
    }
}

export async function getMarket() {
    const res = await marketInstance.get("/")
    return res.data.data
}  