import Wraper from '@/components/Layout/Wraper'
import React, { useState } from 'react'
import RateModal from '../../components/RateTable/RateModal'
import RateTable from '@/components/RateTable/RateTable'
import { useGetRates } from '@/Hooks/queryHooks'
import { Container } from '@mui/material'
import Spinner from '@/components/Loader/Spinner'
import { createRef } from 'react'

const RatePage = () => {

    const { data, isLoading, error, isError } = useGetRates();

  return (
    <Wraper>
     {isLoading ? <Spinner size={230}/> : <Container>
        <RateTable assets={data} />
      </Container>}
    </Wraper>
  );
}

export default RatePage