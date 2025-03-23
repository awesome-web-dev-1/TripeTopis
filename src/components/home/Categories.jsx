import React from 'react'
import { CategoriesItem } from '../../constant/data'

const Categories = () => {
  return (
    <section className='bg-bgClr1 py-[120px] md:py-[150px]'>
        <div className="container">
            <p className="subtitle">CATEGORIES</p>
            <h2>We Offer The Best Service</h2>

            <ul className='grid gap-6 mt-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {CategoriesItem.map((item)=>(
                    <li key={item.id} className='border border-neutral-700/25 rounded-xl grid gap-4 p-8 text-center bg-white'>
                        <div className="mx-auto">
                            <img src={item.imgUrl} alt={item.title} width={92} height={78} />
                        </div>
                        <div className="grid gap-4">
                            <h3 className="text-[20px] font-semibold">{item.title}</h3>
                            <p className="">{item.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Categories