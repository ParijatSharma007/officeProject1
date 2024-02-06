import React from 'react'
import Wraper from '@/components/Layout/Wraper'
import { useRouter } from 'next/router'
import SingleData from './SingleData'
import { Box } from '@mui/material'
import SingleMarket from './SingleMarket'
import { useGetSingleData } from '@/Hooks/queryHooks'
import SingleHistory from './SingleHistory'

const SingleCryptoPgae = () => {
    const {crypId} = useRouter().query
    
    
    if(crypId){
        return (
          <Wraper>
            {<Box>

              <SingleData id={crypId} />
            <Box
              display="flex"
              flexDirection="row"
              sx={{
                paddingTop: "20px",
              }}
            >
              <SingleMarket id={crypId} />
              <SingleHistory id={crypId}/>
            </Box>
              </Box> }
          </Wraper>
        );
    }
}

export default SingleCryptoPgae