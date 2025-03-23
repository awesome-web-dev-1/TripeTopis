import { aboutSecItems, aboutSecStatesItems } from "../../constant/data"
import {Check} from 'lucide-react'
import Button from "../common/Button"
const AboutSec = () => {
  return (
    <section className="pt-[120px] md:pt-[150px] pb-[80px]">
        <div className="container grid gap-[50px] md:grid-cols-2">
            <div className="">
                <p className="subtitle">GET TO KNOW US</p>
                <h2 className="mt-2">Experience the World With Tourice</h2>
                <p className="mt-4 mb-8">
                Tourice was born out of a shared passion for exploration and a desire to create meaningful travel experiences. We believe travel is more than just visiting a place;
                </p>

                <ul className="grid gap-5 my-8">
                    {aboutSecItems.map((item)=>(
                        <li key={item.id} className="flex gap-3">
                            <span>
                                <Check />
                            </span>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>

                <Button className="btn-primary my-8" label='Read More' path='about' />

                <ul className="mt-9 flex flex-col xs:flex-row gap-8 md:gap-[73px]">
                    {aboutSecStatesItems.map((item)=>(
                        <li key={item.id}>
                            <h3 className="text-[36px] font-semibold text-[#26A59E] mt-2 w-full">{item.num}</h3>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <figure className="mx-auto">
                <img src="/images/about-banner.png" alt="about banner" />
            </figure>
        </div>
    </section>
  )
}

export default AboutSec