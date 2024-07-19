import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Populer } from '../Components/Populer/Populer'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>

      <Hero/>
      <Populer/>
      <Offers/>
      <NewCollections/>

    </div>
  )
}

export default Shop