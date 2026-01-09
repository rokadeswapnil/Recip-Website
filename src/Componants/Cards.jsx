import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({items}) => {
  const navigate = useNavigate();
  const handleClick = (info) => {
  navigate("/cardInfo", {
    state: { info }
  });
};

  return (
    <>
    {items.map((item,index)=>(
      <div key={index} class="relative h-[400px] rounded-lg sm:w-[300px] ">
  <img
    src={item.image}
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-lg object-cover"
  />
  <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{item.name}</h1>
    <p class="mt-2 text-sm text-gray-300">
     Rating {item.rating}
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={()=>handleClick(item)} >
      Check →
    </button>
  </div>
</div>
    ))}
</>
  )
}

export default Cards
