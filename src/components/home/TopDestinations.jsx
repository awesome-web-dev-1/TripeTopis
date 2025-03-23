import { popularDestiItems,popularDestiItems2 } from "../../constant/data"
import DestinationSecCard from "../sections/DestinationSecCard"
const TopDestinations = () => {
  return (
    <section className="py-[120px] md:py-[150px] bg-bgClr1">
        <div className="container">
          <div className="xs:text-center max-w-[770px] mx-auto">
            <p className="subtitle">FEATURED DESITNATION</p>
            <h2>Popular Destinations Open For
            Visitors</h2>
          </div>

          <div className="md:flex md:gap-6 md:items-stretch">
            <ul className="sm:grid popDesti gap-6 mt-28 text-white">
              {popularDestiItems.map((item)=>(
                <DestinationSecCard key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} rate={item.rate} />
              ))}
            </ul>


            <ul className="grid gap-6 popDesti2 mt-28 text-white sm:grid-cols-2 md:grid-cols-1">
              {popularDestiItems2.map((item)=>(
                <DestinationSecCard key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} rate={item.rate} />
              ))}
            </ul>
               
          </div>
        </div>
    </section>
  )
}

export default TopDestinations