import React from 'react'
import { teamsConditionItems } from '../constant/data'

const TeamsCondition = () => {
  return (
    <section className='py-[120px]'>
        <div className="container grid gap-6">
            {teamsConditionItems.map((item)=>(
                <div className="grid gap-4" key={item.id}>
                    <h2 className='text-[34px] font-medium'>{item.title}</h2>
                    <p>{item.text}</p>
                    <p>{item.text2}</p>
                    <p>{item.text3}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TeamsCondition