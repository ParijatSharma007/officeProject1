import { assetInstance } from "@/AxiosInstance/axiosInstance";

export async function getAssets() {
    const res = await assetInstance.get('/')
    return res.data.data
}

export async function getSingleAsset(id : string | string[] | undefined) {
    const res = await assetInstance.get(`/${id}`)
    return res.data.data
}

export async function getAssetHistory(
  id: string | string[] | undefined,
  interval: "m1" | "m5"| "m15" | "m30" | "h1 "| "h2" | "h6" | "h12" | "d1"
) {
  const res = await assetInstance.get(`/${id}/history?interval=${interval}`);
  return res.data.data;
}

export async function getAssetMarket(id: string | string[] | undefined) {
  const res = await assetInstance.get(`/${id}/markets`);
  return res.data.data;
}

