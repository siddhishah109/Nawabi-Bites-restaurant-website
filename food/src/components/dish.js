import React from 'react'
import '../style/dish.css'

const Dish = (props) => {
  return (

  <>
  <div className='c1 '><img src={props.name} className=' enlarge-on-hover p1 m-5 sun ' alt='dish'/> <span className=' wave-on-hover t1' >{props.title}</span></div>
  </>
  )
}

export default Dish