import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

export type AssetsIterface = AssetIterface[] | undefined;

export interface AssetIterface {
  id: string;
  symbol: string;
  currentSymbol: string;
  type : string
  rateUsd : string
}

export default function RateTable({ assets, openModal }: any) {
  return (
    <Container sx={{ paddingRight: "20px", paddingTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell size="medium">
                <h2>SYMBOL</h2>
              </TableCell>
              <TableCell align="center" size="medium">
                <h2>Current Symbol</h2>
              </TableCell>
              {/* <TableCell align="right" size="medium">
                <h2>Name</h2>
              </TableCell> */}
              <TableCell align="center" size="medium">
                <h2>Type</h2>
              </TableCell>
              <TableCell align="center" size="medium">
                <h2>Price</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets?.map((asset: AssetIterface) => (
              <TableRow
                key={asset.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => openModal(asset.id)}
              >
                <TableCell component="th" scope="row">
                  <h2>{asset.symbol}</h2>
                </TableCell>

                <TableCell align="center">
                  <h3>{asset.symbol}</h3>
                </TableCell>
                {/* <TableCell align="right">
                  <h3>{asset.name}</h3>
                </TableCell> */}
                <TableCell align="center">
                  <h3>{Number(asset.currentSymbol).toFixed(2)}</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>{Number(asset.type).toFixed(2)}</h3>
                </TableCell>

                <TableCell align="center">
                  <h3>{Number(asset.rateUsd).toFixed(2)}</h3>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
