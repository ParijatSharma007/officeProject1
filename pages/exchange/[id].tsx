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
        const {data, isLoading, error, isError} = useGetSingleExchange(id)
        return (
            <Wraper>
                {isLoading && !data? <Spinner size={230}/> : <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 24, textAlign : "center" }} color="text.primary" gutterBottom>
                        
                    </Typography>
                    <Typography variant="h3" component="div">
                      {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      volumeUsd : {data.volumeUsd}
                    </Typography>
                    <Typography variant="body2">
                      percentTotalVolume : {data.percentTotalVolume}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link href={data?.exchangeUrl}>Learn More</Link>
                    </CardActions>
                </Card>}
            </Wraper>
        );
}
export default SingleExchangePage
