import { useGetMarket } from '@/Hooks/queryHooks'
import Wraper from '@/components/Layout/Wraper'
import CommonTable from '@/components/commonTable/CommonTable'
import React from 'react'
import { useMemo } from 'react'
import Spinner from '@/components/Loader/Spinner'
import { queryClient } from '../_app'
import { getMarket } from '@/AxiosCalls/marketCalls'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export async function getStaticProps() {
  queryClient.prefetchQuery({
    queryKey : ["market"],
    queryFn : getMarket
  })

  return {
    props : {
      dehydratedState : dehydrate(queryClient)
    },
    revalidate : 100 
  }
}

const Market = ({dehydratedState} : any) => {

  const {data, isLoading, error, isError} = useGetMarket()

  const fields = useMemo(() => (
    ["baseSymbol", "rank", "priceUsd","priceQuote","tradesCount24Hr", "volumeUsd24Hr"]
  ), [])

  return (
    <HydrationBoundary state={dehydratedState}>
      <Wraper>
        {!isLoading && data ?
          <CommonTable 
          data={data} 
          fields={fields} 
          path="market"
          /> : <Spinner size={230}/>
        }
      </Wraper>
    </HydrationBoundary>
  )
}

export default Market
