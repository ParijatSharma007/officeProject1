import Wraper from '@/components/Layout/Wraper'
import React, { useState } from 'react'
import RateModal from './RateModal'
import RateTable from '@/components/RateTable/RateTable'
import { useGetRates } from '@/Hooks/queryHooks'
import { Container } from '@mui/material'
import Spinner from '@/components/Loader/Spinner'

const RatePage = () => {

    const { data, isLoading, error, isError } = useGetRates();

    console.log(data);
    

    const [modal, setModal] = useState<boolean>(false)
    const [singleRateId, setSingleRateId] = useState<string|null>(null)

    const modalOpener = (id : string) => {
        setModal(true)
        setSingleRateId(id)
    }

    const closeModal = () => {
        setModal(false)
    }


  return (
    <Wraper>
     {isLoading ? <Spinner size={230}/> : <Container>
        <RateTable assets={data} openModal={modalOpener} />
        <RateModal open={modal} handleClose={closeModal} id={singleRateId}/>
      </Container>}
    </Wraper>
  );
}

export default RatePage