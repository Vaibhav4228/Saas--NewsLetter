import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./elements/banner"

import Branding from "@/modules/home/elements/branding"

import Benefits from "@/modules/home/elements/Benefits"
import FeatureHighlight from './elements/feature.highlight'
import Pricing from './elements/pricing'
import Footer from '@/shared/widgets/footer'

const home = () => {
  return (
    <div>
        <Header/>
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighlight />
        <Pricing />
        <Footer/>
    </div>
  )
}

export default home