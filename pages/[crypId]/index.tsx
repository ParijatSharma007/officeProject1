import React from 'react'
import Wraper from '@/components/Layout/Wraper'
import { useRouter } from 'next/router'
import SingleData from './SingleData'
import { Box } from '@mui/material'
import SingleMarket from './SingleMarket'
import { useGetSingleData,  useGetCryptoHistory} from '@/Hooks/queryHooks'
import { useState } from 'react'
import SingleHistory from './SingleHistory'

const SingleCryptoPgae = () => {
    const {crypId} = useRouter().query

    const [interval, setIterval] = useState<"m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1">("h2");
    const handleInterval = (
      value: "m1" | "m5" | "m15" | "m30" | "h1 " | "h2" | "h6" | "h12" | "d1"
    ) => {
      setIterval(value);
    };

    const singleData = useGetSingleData(crypId)

    const singleHistory = useGetCryptoHistory(crypId, interval)
    
    if(crypId){
        return (
          <Wraper>
            {crypId ? <Box>

              <SingleData data={singleData} />
            <Box
              display="flex"
              flexDirection="row"
              sx={{
                paddingTop: "20px",
              }}
            >
              <SingleMarket id={crypId} />
              <SingleHistory historyData={singleHistory} handleChange={handleInterval} interval={interval}/>
            </Box>
              </Box> : null}
          </Wraper>
        );
    }
}

export default SingleCryptoPgae