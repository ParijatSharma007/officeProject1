import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGetRates } from "@/Hooks/queryHooks";
import Spinner from "@/components/Loader/Spinner";
import { Button } from "@mui/material";

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
    id : string|null
}

export default function RateModal({ open, handleClose, id } : ModalInterface) {

  if(id !== null){
    var {data, isLoading, error, isError} = useGetRates(id)

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {!isLoading ? (
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h3"
                sx={{ textAlign: "center", color: "white" }}
              >
                {data?.symbol}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, color: "white" }}
              >
                Price in USD : {data?.rateUsd}$
              </Typography>
              <br />
              <Box display="flex" flexDirection="row" alignItems='center'>
                <Button
                  sx={{
                    backgroundColor: "blue",
                    alignItems: "left",
                    color: "white",
                  }}
                  onClick={handleClose}
                >
                  BUY
                </Button>
                <Button
                  sx={{
                    backgroundColor: "red",
                    alignItems: "right",
                    color: "white",
                  }}
                  onClick={handleClose}
                >
                  SELL
                </Button>
              </Box>
            </Box>
          ) : (
            <Spinner size={70} />
          )}
        </Modal>
      </div>
    );
}}
