import React from 'react'
import { destinationCard2Item, destinationCardItems } from '../constant/data'
import DestinationSecCard from '../components/sections/DestinationSecCard'
import DestinationSecCard2 from '../components/sections/DestinationSecCard2'

const Destination = () => {
  return (
    <>
    <section className='py-[120px]'>
      <div className="container">
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {destinationCardItems.map((item)=>(
            <DestinationSecCard key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} rate={item.rate} />
          ))}
        </ul>
      </div>
    </section>


    <section className='py-[120px]'>
          <div className="container">
            <p className="subtitle md:text-center">GET TO KNOW US</p>
            <h2 className='md:text-center'>Experience the World <br /> With Triptopia</h2>
            <p className='md:text-center max-w-[612px] md:mx-auto mt-4'>Our dating website offers a range of features and benifits that make finding love online simple and enjoyable. With our advanced matching algorithm</p>

          <div className="grid md:grid-cols-2 gap-[60px] items-center">
            <ul className='grid grid-cols-2 gap-6 mt-[60px] md:order-1'>
              {destinationCard2Item.map((item)=>(
                <DestinationSecCard2 imgUrl={item.iconImg} title={item.title} text={item.text} />
              ))}
            </ul>
            <div className="mx-auto">
              <img src="/images/destination-page-banner.png" alt="" />
            </div>
          </div>

          </div>
    </section>
</>
  )
}

export default Destination