import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Dialog, DialogTitle } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalInterface{
    open : boolean,
    handleClose : any,
    data : any
}

const RateModal = ({data, handleClose, open} : ModalInterface) => {

    return (
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <Box sx={{padding : "20px"}}>
            <DialogTitle variant="h3">{data?.symbol}</DialogTitle>
            <Box display={"flex"} flexDirection={"row"}>
                <Typography variant="h4">Price : </Typography>
                <Typography variant="h4">{data?.rateUsd}</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
                <Button sx={{backgroundColor : "blue", color : "white"}}>BUY</Button>
                <Button sx={{backgroundColor : "red", color : "white"}}>SELL</Button>
            </Box>
          </Box>
        </Dialog>
    );
}

export default RateModal
