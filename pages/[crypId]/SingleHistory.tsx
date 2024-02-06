import { useGetCryptoHistory } from '@/Hooks/queryHooks'
import React, { useCallback, useEffect } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from '@mui/material';
import Spinner from '@/components/Loader/Spinner';
import SelectInterval from '../../components/HomePage/IntervalSelecter';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Graph from './Graph';


interface SingleDataInterface {
  id: string | string[] | undefined;
}

const SingleHistory = ({id} : SingleDataInterface) => {

   

    const [interval, setIterval] = useState<"m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1">("h2");
    const router = useRouter()

    const handleInterval = (
      value: "m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1"
    ) => {
      setIterval(value);
    };

    console.log("I am single history");

  const {data, isLoading, isError, error} = useGetCryptoHistory(id, interval)

  const[chartData, setChartData] = useState<{xAxis : number[], yAxis : number[]}>({
    xAxis : [1, 2, 3],
    yAxis : [1, 2, 3]
  })


  useEffect(() => {
    if(data && !isLoading){
      let xAxis : number[] = []
      let yAxis : number[]= []
      data?.map((item : {time : number, priceUsd : String}) => {
        xAxis.push(item.time)
        yAxis.push(Number(item.priceUsd))
      })
      setChartData({
        xAxis,
        yAxis
      })
      console.table(xAxis)
      console.table(yAxis)
    }
    
  }, [interval, data, isLoading])

  if (error) {
    router.push("/404");
  }

  return (
    <Container>
       <Box
       display="flex"
      flexDirection="column"
      sx={{
        paddingTop: "10px",
        paddingBottom : "10px"
      }}
       >
        <SelectInterval interval={interval} handleChange={handleInterval}/>
        {isLoading || isError ? <Spinner size={70}/> : 
        <Graph xAxis={chartData.xAxis} yAxis={chartData.yAxis}/>}
        
       </Box>
    </Container>
  );
}

export default React.memo(SingleHistory, (prevProps, postProps) : any => {
    return(
        prevProps.id === postProps.id
    )
})