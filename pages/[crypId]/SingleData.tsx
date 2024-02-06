import React from 'react'
import { Container } from '@mui/material';
import SingleDataTable from '../../components/HomePage/SingleDataTable';
import { useGetSingleData } from '@/Hooks/queryHooks';

const SingleData = ({ id }: any) => {

  const {data, isLoading, error, isError} = useGetSingleData(id)

  return (
    <Container sx={{padding : "20px"}}>
      {isLoading && <SingleDataTable data={data.data}/>}
    </Container>
  )
};

export default React.memo(SingleData, (prevProps:any, nextProps:any) => {
    return prevProps === nextProps
})