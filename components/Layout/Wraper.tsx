import React from 'react'
import Header from './Header'

interface LayoutInterface {
    children : JSX.Element | JSX.Element[] | null
}

const Wraper = ({children} : LayoutInterface) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default Wraper