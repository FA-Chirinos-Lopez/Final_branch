import React from "react"

import ServiceItem from "../../components/serviceItem"

import HeroImage from "../../images/live-1.jpeg"
import Live1 from "../../images/news1.jpg"
import Live2 from "../../images/live-2.jpeg"
import Live3 from "../../images/live-3.jpeg"
import Live4 from "../../images/project1.jpeg"
import Live5 from "../../images/project2.jpeg"
import Live6 from "../../images/project3.jpeg"
import Live7 from "../../images/project4.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"

const Studio = () => {
  const images = [
    Live1,
    Live2,
    Live3,
    Live4,
    Live5,
    Live6,
    Live7,
    Live8,
    Live9,
    Live10,
  ]
  const texts=[
    //Header
    "For live streaming or pre-recorded content, our studio services create broadcast-quality productions.",
    //1st text
    "The demands of producing a live stream can be a minefield of challenges. Let us take the headache away and help you deliver your most successful live streamed event.",
    "Our studio services are as broad as your imagination. From LED streaming studios and green screen recording studios to stream management services and event streaming microsites, we have all your live streaming needs covered.",
    //2nd text
    "We have permanent studios set up in London and Telford and a fully remote option. Our streaming specialists will direct your event, switching between remote presenters, enabling live audience interaction and integrating presentation content into the live streamed production. Our services can also be used for pre-recorded content to be used at a later date.",
    "",
    //Footer text
    "Our streaming solutions ease the stress and deliver high quality, secure and engaging live streamed experiences."
  ]
  return (
    <ServiceItem serviceName="Studio" heroImage={HeroImage} images={images} texts={texts} />
  )
}

export default Studio
