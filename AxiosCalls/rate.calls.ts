import { rateInstance } from "@/AxiosInstance/axiosInstance";

export async function getAllRates () {
    const res = await rateInstance.get("/")
    return res.data.data
}

export async function getSingleRate(id: string | string[] | undefined) {
    const res = await rateInstance.get(`/${id}`)
    return res.data.data
}