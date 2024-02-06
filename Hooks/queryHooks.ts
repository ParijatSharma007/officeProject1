import { getAssetHistory, getAssetMarket, getAssets, getSingleAsset } from "@/AxiosCalls/assetsCalls";
import { getExchange, getSingleExchange } from "@/AxiosCalls/exchanceCalls";
import { getMarket, getSingleMarket } from "@/AxiosCalls/marketCalls";
import { getAllRates, getSingleRate } from "@/AxiosCalls/rate.calls";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";

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
        queryKey: [`assets-${id}`,id],
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

export function useGetRates (id : string | string[] | undefined | null = null, open : boolean = false) {
  
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
    enabled : id && open ? true : false 
  })

  return { data, isLoading, error, isError };
}

export function useGetExchange() {
  const {data, isError, isLoading, error} = useQuery({
    queryKey : [`exchanges`],
    queryFn : getExchange,
    refetchInterval : 1000
  })
  return {data, isError, isLoading, error}
}

export function useGetSingleExchange (id : string | string[] |undefined){
  const {data, isError, isLoading, error} = useQuery({
    queryKey : [`exchange-${id}`],
    queryFn : () => getSingleExchange(id),
    refetchInterval : 1000,
    enabled : id ? true : false
  })

  return {data, isError, isLoading, error}
}

export function useGetMarket () {
    const {data, isError, isLoading, error} = useQuery({
      queryKey : [`market`],
      queryFn : () => getMarket(),
      refetchInterval : 1000
    })

    return {data, isError, isLoading, error}
}