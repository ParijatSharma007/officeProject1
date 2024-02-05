import React, { useState } from 'react'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RateModal from './RateModal';

interface RateRow {
    asset : AssetIterface
}

interface AssetIterface {
    id: string;
    symbol: string;
    currentSymbol: string;
    type : string
    rateUsd : string
  }

const MappingRateRow = ({asset} : RateRow) => {
    const [open, setOpen] = useState<boolean>(false)
    const openModal = () => {
        setOpen(true)
    }
    const closeModal =() => {
        setOpen(false)
    }
  return (
    
        <>
            <TableRow    
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={openModal}
              >
                <TableCell scope="row" align='center'>
                  <h2>{asset.symbol}</h2>
                </TableCell>

                <TableCell align="center">
                  <h3>{asset.symbol}</h3>
                </TableCell>

                <TableCell align="center">
                  <h3>{asset.type}</h3>
                </TableCell>

                <TableCell align="center">
                  <h3>{Number(asset.rateUsd).toFixed(2)}</h3>
                </TableCell>
            </TableRow>
            <RateModal id={asset.id} open={open} handleClose={closeModal}/>
        </>
       
  )
}

export default MappingRateRow
