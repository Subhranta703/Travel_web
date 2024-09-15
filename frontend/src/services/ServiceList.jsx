import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Weather Forecast`,
      desc: `Stay Informed with the Latest Weather Updates for Your destination.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Discover Hidden Treasures with Our Comprehensive Local Guide`,
   },
   {
      imgUrl: customizationImg,
      title: 'Local News',
      desc: `Stay Updated on Local Events, Breaking News, and Important Announcements from your destination.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList