import React from 'react'
import Header from '../../components/header/Header'
import ApartementGridd from '../../components/apartements/ApartementGridd'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <ApartementGridd/>
    </div>
  )
}

export default Home
