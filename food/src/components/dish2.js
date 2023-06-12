import React from 'react'

import '../style/dish.css'

const Dish2 = (props) => {
  return (

  <>
  <div>
  <div className='c1'> <span className='t1'>{props.title}<img src={props.name} className='p1 m-5 sun' alt='dish'/></span></div>
  </div>
  </>
  )
}

export default Dish2