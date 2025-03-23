import React from 'react'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <section>
      <div className="container grid place-content-center text-center py-[120px]">
        <div className="">
          <img src="/images/404.png" alt="error page image" width={724} height={570} />
        </div>
        <h2 className='mt-8'>Sorry, we can't find that page</h2>
        <p className='mt-[50px] mb-4'>You may have mistyped the address or the page may have moved.</p>
        <Button label="Back to Home" className='bg-secodaryClr max-w-max mx-auto text-white px-5 py-3 hover:bg-secodaryClr/90 transition-colors' path='/' />
      </div>
    </section>
  )
}

export default NotFound