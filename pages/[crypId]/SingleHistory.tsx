import { useGetCryptoHistory } from '@/Hooks/queryHooks'
import React, { useCallback } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from '@mui/material';
import Spinner from '@/components/Loader/Spinner';
import SelectInterval from './IntervalSelecter';
import { useState } from 'react';
import { useRouter } from 'next/router';


interface SingleDataInterface {
  id: string | string[] | undefined;
}

const SingleHistory = ({id} : SingleDataInterface) => {

   

    const [interval, setIterval] = useState<"m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1">("m1");
    const router = useRouter()

    // const handleInterval = useCallback(
    //   (
    //     value: "m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1"
    //   ) => {
    //     const changeInterval = () => {
    //       setIterval(value);
    //     };
    //     return changeInterval
    //   },
    //   []
    // );

    const handleInterval = (
      value: "m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1"
    ) => {
      setIterval(value);
    };

    console.log("I am single history");

  const {data, isLoading, isError, error} = useGetCryptoHistory(id, interval)

  if (error) {
    router.push("/404");
  }

  return (
    <Container>
       <Box
       display="flex"
      flexDirection="column"
      maxWidth={600}
      maxHeight={100}
      sx={{
        paddingTop: "10px",
        paddingBottom : "10px"
      }}
       >
        {isLoading || isError ? <Spinner size={70}/> :
        <Box>
        <SelectInterval handleChange={handleInterval} interval={interval}/>
        <TableContainer
        component={Paper}
        sx={{
            border: "4px solid rgba(0,0,0,0.2)",
            width: 555,
            height: 350,
            margin: "auto",
        }}
        >
        <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>
                <h2>PRICE</h2>
                </TableCell>
                <TableCell align="center">
                <h2>TIME</h2>
                </TableCell>
                <TableCell align="center">
                <h2>DATE</h2>
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data?.map((data: any, idx: number) => (
                <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    <h3>{data.priceUsd}</h3>
                </TableCell>
                <TableCell align="center">
                    <h3>{data.time}</h3>
                </TableCell>
                <TableCell align="center">
                    <h3>{data.date}</h3>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Box>}
       </Box>
    </Container>
  );
}

export default React.memo(SingleHistory, (prevProps, postProps) : any => {
    return(
        prevProps.id === postProps.id
    )
})