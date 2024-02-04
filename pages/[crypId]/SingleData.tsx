import { useGetSingleData } from '@/Hooks/queryHooks';
import React from 'react'
import { Container } from '@mui/material';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Spinner from '@/components/Loader/Spinner';
import { useRouter } from 'next/router';

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

function BasicTable({data} : CrypData) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>RANK</h2>
            </TableCell>
            <TableCell align="center">
              <h2>SYMBOL</h2>
            </TableCell>
            <TableCell align="center">
              <h2>SUPPLY</h2>
            </TableCell>
            <TableCell align="center">
              <h2>MAX SUPPLY</h2>
            </TableCell>
            <TableCell align="center">
              <h2>MARKET CAP USD</h2>
            </TableCell>
            <TableCell align="center">
              <h2>VOLUME USD 24 Hr</h2>
            </TableCell>
            <TableCell align="center">
              <h2>PRICE USD</h2>
            </TableCell>
            <TableCell align="center">
              <h2>CHANGE PERCENT 24 Hr</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={data?.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <h3>{data?.rank}</h3>
            </TableCell>
            <TableCell align="center"><h3>{data?.symbol}</h3></TableCell>
            <TableCell align="center"><h3>{data?.supply}</h3></TableCell>
            <TableCell align="center"><h3>{data?.maxSupply}</h3></TableCell>
            <TableCell align="center"><h3>{data?.marketCapUsd}</h3></TableCell>
            <TableCell align="center"><h3>{data?.volumeUsd24Hr}</h3></TableCell>
            <TableCell align="center"><h3>{data?.priceUsd}</h3></TableCell>
            <TableCell align="center"><h3>{data?.changePercent24Hr}</h3></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const SingleData = ({ id }: SingleDataInterface) => {

  console.log("I am single data");

  const {data, isLoading, isError, error} = useGetSingleData(id)

  const router = useRouter()

  if(error){
    router.push('/404')
  }

  return (
    <Container sx={{padding : "20px"}}>
       {!isLoading || !isError && <BasicTable data={data}/>}
    </Container>
  )
};

export default React.memo(SingleData, (prevProps:any, nextProps:any) => {
    return prevProps === nextProps
})