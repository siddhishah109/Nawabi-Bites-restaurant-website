import React from 'react'

// import $ from 'jquery';


import '../style/dish.css'

const Dish = (props) => {
  // var $sun=$('.sun');
  // var $win=$(window);
  // $win.on('scroll',function(){
  //   var top =$win.scrollTop();
  //   $sun.css('transform','rotate('+ top +' deg)');
  //   console.log('scroll');
  // });
  return (

  <>
  <div className='c1'><img src={props.name} className='p1 m-5 sun' alt='dish'/> <span className='t1'>{props.title}</span></div>
  </>
  )
}

export default Dish