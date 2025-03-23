const RightCard = ({ title,imgUrl,date,key }) => {
  return (
    <li key={key} className='flex items-center justify-start gap-6 border-b pb-6'>
        <div className="">
            <img src={imgUrl} alt={title} />
        </div>
        <div className="">
            <p className='font-semibold max-w-[250px] text-neutral-900 mb-2'>{title}</p>
            <p>{date}</p>
        </div>
        
    </li>
  )
}

export default RightCard