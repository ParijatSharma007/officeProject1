import React from 'react'
import { useRouter } from 'next/router';
import Wraper from '@/components/Layout/Wraper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useGetSingleExchange } from '@/Hooks/queryHooks';
import Spinner from '@/components/Loader/Spinner';
import Link from 'next/link';
const SingleExchangePage = () => {
  const {id} = useRouter().query
  const router = useRouter()
        const {data, isLoading, error, isError} = useGetSingleExchange(id)
        console.log("data : ",data, " isLoading : ", isLoading);

        if(error){
          router.push('/404')
        }

        if(isLoading){
          return(
            <Spinner size={230}></Spinner>
          )
        }
        
        return (
            <Wraper>
                <Typography>
                  Check Console
                </Typography>
            </Wraper>
        );
}
export default SingleExchangePage
