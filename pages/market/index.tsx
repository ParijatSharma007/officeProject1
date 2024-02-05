import { useGetMarket } from '@/Hooks/queryHooks'
import Wraper from '@/components/Layout/Wraper'
import CommonTable from '@/components/commonTable/CommonTable'
import React from 'react'
import { useMemo } from 'react'
import Spinner from '@/components/Loader/Spinner'

const Market = () => {

  const {data, isLoading, error, isError} = useGetMarket()

  const fields = useMemo(() => (
    ["baseSymbol", "rank", "priceUsd","priceQuote","tradesCount24Hr", "volumeUsd24Hr"]
  ), [])

  return (
    <Wraper>
      {!isLoading && data ?
        <CommonTable 
        data={data} 
        fields={fields} 
        path="market"
        /> : <Spinner size={230}/>
      }
    </Wraper>
  )
}

export default Market
