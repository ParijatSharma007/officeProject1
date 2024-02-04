import React from 'react'
import Wraper from '@/components/Layout/Wraper'
import { useRouter } from 'next/router'
import SingleData from './SingleData'
import { Box } from '@mui/material'
import SingleMarket from './SingleMarket'
import SingleHistory from './SingleHistory'

const SingleCryptoPgae = () => {
    const {crypId} = useRouter().query
    
    if(crypId){
        return (
          <Wraper>
            <SingleData id={crypId} />
            <Box
              display="flex"
              flexDirection="row"
              sx={{
                paddingTop: "20px",
              }}
            >
              <SingleMarket id={crypId} />
              <SingleHistory id={crypId} />
            </Box>
          </Wraper>
        );
    }
}

export default SingleCryptoPgae