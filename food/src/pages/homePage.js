import React from 'react'
import '../style/home.css'
import Button from 'react-bootstrap/Button';
import About from '../components/about';
import logo from '../img/bg1q.png';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import Dish from '../components/dish';
import Dish2 from '../components/dish2';



const HomePage = () => {
  return (
    <>
    <div className='home'>

<div className='title'>
<h1 className='h1 wrapper'>
  <div className='bg' >Lazeez....</div>
  <div className='fg' >Lazeez....</div>
</h1>
<h2>The tast of India</h2>


<Button className='but' variant="light">Order Now!</Button>
</div>
<div className='img' 
     data-aos-anchor-placement="top-bottom"  
 >
<img src={logo} alt='logo' className='logo' height={550}/>
</div>



</div>
<div className='plates'>
  <Dish name={p1} title='Exquisite Cuisine'/>
  <Dish2 name={p2} title='Delicious Delights'/>
  <Dish name={p3} title='Satisfying'/>
</div>

<div>
<About/>
</div>
    </>
  )
}

export default HomePage