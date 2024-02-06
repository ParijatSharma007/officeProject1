import { useGetExchange } from '@/Hooks/queryHooks'
import Wraper from '@/components/Layout/Wraper'
import CommonTable from '@/components/commonTable/CommonTable'
import React, { useMemo } from 'react'

const Exchange = () => {
    const {data, isLoading, isError, error} = useGetExchange()

    const fields = useMemo(() => ["name", "rank", "percentTotalVolume", "volumeUsd", "tradingPairs", "exchangeUrl"], [])

  return (
    <Wraper>
      <CommonTable 
      data={data}
      fields={fields}
      haveTonNavigate={true}
      path="exchange"
      asId = {"exchangeId"}
      />
    </Wraper>
  )
}

export default Exchange
