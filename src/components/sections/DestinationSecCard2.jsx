import React from 'react'

const DestinationSecCard2 = ({imgUrl,title,text}) => {
  return (
    <li className='grid gap-4'>
        <div className="max-w-max">
            <img src={imgUrl} className='' alt={title} />
        </div>

        <div className="grid gap-4">
            <h3 className='text-[24px] font-semibold'>{title}</h3>
            <p className='max-w-[316px]'>{text}</p>
        </div>
    </li>
  )
}

export default DestinationSecCard2