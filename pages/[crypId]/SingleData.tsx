import { useGetSingleData } from '@/Hooks/queryHooks';
import React from 'react'
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import SingleDataTable from '../../components/HomePage/SingleDataTable';

interface SingleDataInterface {
  id: string | string[] | undefined;
}

interface DataInterFace {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

interface CrypData {
    data : DataInterFace
}

const SingleData = ({ id }: SingleDataInterface) => {

  console.log("singleData Props : ", id);

  const {data, isLoading, isError, error} = useGetSingleData(id)

  const router = useRouter()

  if(error){
    router.push('/404')
  }

  return (
    <Container sx={{padding : "20px"}}>
       {!!data && <SingleDataTable data={data}/>}
    </Container>
  )
};

export default React.memo(SingleData, (prevProps:any, nextProps:any) => {
    return prevProps === nextProps
})