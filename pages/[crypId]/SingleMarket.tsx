import { useGetSingleData } from '@/Hooks/queryHooks'
import { Box } from '@mui/material'
import React from 'react'
import Spinner from '@/components/Loader/Spinner'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRouter } from 'next/router';


interface SingleDataInterface {
  id: string | string[] | undefined;
}

export interface Root {
    data : Root2[]
};

export interface Root2 {
  exchangeId: string;
  baseId: string;
  quoteId: string;
  baseSymbol: string;
  quoteSymbol: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  volumePercent: string;
}


function BasicTable({ data } : Root) {
  return (
    <TableContainer component={Paper}
        sx={{
            border : "4px solid rgba(0,0,0,0.2)",
            width : 555,
            height : 350,
            margin : 'auto'
        }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>BASE SYMBOL</h2>
            </TableCell>
            <TableCell align="center">
              <h2>QUOTE SYMBOL</h2>
            </TableCell>
            <TableCell align="center">
              <h2>VOLUME PERCENT</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {data?.map((data, idx) => <TableRow
            key={idx}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <h3>{data.baseSymbol}</h3>
            </TableCell>
            <TableCell align="center">
              <h3>{data.quoteSymbol}</h3>
            </TableCell>
            <TableCell align="center">
              <h3>{data.volumePercent}</h3>
            </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const SingleMarket = ({id} : SingleDataInterface) => {
  const {data, isLoading, error, isError} = useGetSingleData(id, "markets")
    
  const router = useRouter()

  if(error){
      router.push('/404')
    }

  return (
    <Box sx={{
        paddingLeft : "33px",
    }}
    maxHeight={550}
    maxWidth={600}
    >
        {isLoading || isError? <Spinner size={70}/> : <BasicTable data={data}/>}
    </Box>
  )
}

export default React.memo(SingleMarket, (prevProps : any, postProps) => {
    return prevProps === postProps
})