import { useGetAssets } from '@/Hooks/queryHooks'
import HomeTable from '@/components/HomePage/HomeTable';
import Wraper from '@/components/Layout/Wraper';
import Spinner from '@/components/Loader/Spinner';
import { useRouter } from 'next/router';
import React from 'react'


const Home = () => {

    const router = useRouter()

    const {data, isLoading, error, isError} = useGetAssets()

    const naviGateToSingle = (id : number) => {
        router.push(`/${id}`)
    }

    return (
        <Wraper>
            {isLoading ? <Spinner size={280}/> : <HomeTable assets={data} toSinglePage={naviGateToSingle}/>}
        </Wraper>
    )
}

export default Home