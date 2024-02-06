import Wraper from '@/components/Layout/Wraper'
import React from 'react'
import RateTable from '@/components/RateTable/RateTable'
import { useGetRates } from '@/Hooks/queryHooks'
import { Container } from '@mui/material'
import Spinner from '@/components/Loader/Spinner'
import { queryClient } from '../_app'
import { getAllRates } from '@/AxiosCalls/rate.calls'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export async function getServerSideProps(context : any) {
  await queryClient.prefetchQuery({
    queryKey : ["rates"],
    queryFn : getAllRates
  })
  return {
    props :{
      dehydratedState : dehydrate(queryClient)
    }
  }
} 


const RatePage = ({dehydratedState} : any) => {

    const { data, isLoading, error, isError } = useGetRates();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Wraper>
      {isLoading ? <Spinner size={230}/> : <Container>
          <RateTable assets={data} />
        </Container>}
      </Wraper>
    </HydrationBoundary>
  );
}


export default RatePage

