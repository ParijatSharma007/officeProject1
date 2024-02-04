import { getAssetHistory, getAssetMarket, getAssets, getSingleAsset } from "@/AxiosCalls/assetsCalls";
import { getAllRates, getSingleRate } from "@/AxiosCalls/rate.calls";
import { useQuery } from "@tanstack/react-query";

export function useGetAssets (){
    const { data , isLoading, error, isError } = useQuery({
      queryKey: ["assets"],
      queryFn: getAssets,
      refetchInterval : 1000,
    });

    return {data, isLoading, error, isError}
}

export function useGetSingleData (id : string | string[] | undefined, type : "markets" | null = null) {
    if(type === null){
      const { data, isLoading, error, isError } = useQuery({
        queryKey: [`assets-${id}`],
        queryFn: () => getSingleAsset(id),
        refetchInterval: 1000,
        enabled : id ? true : false
      });

      return { data, isLoading, error, isError };
    }

    const { data, isLoading, error, isError } = useQuery({
      queryKey: [`assets-${id}-market`],
      queryFn: () => getAssetMarket(id),
      refetchInterval: 1000,
      enabled: id ? true : false,
    });

    return { data, isLoading, error, isError };
}

export function useGetCryptoHistory (id : string | string[] | undefined, interval : "m1" | "m5"| "m15" | "m30" | "h1 "| "h2" | "h6" | "h12" | "d1" = "d1"){
    const { data, isLoading, error, isError } = useQuery({
      queryKey: [`assets-${id}-history`],
      queryFn: () => getAssetHistory(id, interval),
      refetchInterval: 1000,
      enabled: id ? true : false,
    });

    return { data, isLoading, error, isError };
}

export function useGetRates (id : string | string[] | undefined | null = null) {
  
  if(!id){
    const {data, isLoading, error, isError} = useQuery({
    queryKey : ["rates"],
    queryFn : getAllRates,
    refetchInterval : 1000
    })
    return {data, isLoading, error, isError}
  }

  const {data, isLoading, error, isError} = useQuery({
    queryKey : [`single-rate-${id}`],
    queryFn : () => getSingleRate(id),
    refetchInterval : 1000,
    enabled : id ? true : false
  })

  return { data, isLoading, error, isError };
}