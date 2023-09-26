import React from 'react'
import '../style/home.css'
import Button from 'react-bootstrap/Button';
import About from '../components/about';
import logo from '../img/logo5.png';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import Dish from '../components/dish';
import Dish2 from '../components/dish2';
import AutoPlay from '../components/autoplay';
import NumberAnimation from '../components/numberAnimation';
import Place from '../components/place';
import r1 from '../img/r1.jpg';
import r2 from '../img/r2.png';
import r3 from '../img/r3.jpg';
import r4 from '../img/r4.jpg';
import menu from '../img/logo1.png';

const HomePage = () => {
  return (
    <>
    <div className='home1'>

<div className='home12'>
  <img src={logo} className='logo-home' />
  <div className='home-title'>
    <h1 className='h1 wrapper'>
  <div className='bg' >Nawabi Bites</div>
  <div className='fg' >Nawabi Bites</div>
</h1>
  </div>
  <div className='home-title1'>
    Since 1975
  </div>
  <div className='home-title2'>
  Where Tradition Meets Taste - Relish the Elegance of Royal Flavors in Every Bite!</div>
  <Button className='but' variant="light">Order Now!</Button>
  <AutoPlay className='slider-home' />
</div>

</div>
<div className='About-home' id='about'>
 <div className='About-title'>  About Us....</div>
 <NumberAnimation/>
 <div className='About-content'><div className='About-text'>"At Nawabi Bites, we invite you to savor the rich flavors of Nawabi cuisine. Our restaurant is a celebration of traditional recipes and culinary artistry. Our skilled chefs craft each dish with precision, offering a delectable journey into the heart of Indian flavors. Whether you're a spice enthusiast or seeking a taste of something new, Nawabi Bites promises an unforgettable dining experience. Join us and explore the royal taste of Nawabi cuisine."</div></div>
</div>
<div className='place'>
  <div className='d-flex justify-content-center'>
    <img src={r1} className='p-img'/>
    <img src={r2}className='p-img'/>
  </div>
  <div className='d-flex justify-content-center'>
    <img src={r3}className='p-img'/>
    <img src={r4}className='p-img'/>
  </div>
</div>
<div className='d-flex menu-home'>
<img src={menu} alt='menu' style={{ height: '40vh' }}/>
<Button className='butt' variant="light">Menu!</Button>
</div>

<div className='plates'>
  <div >Chef's specialty</div>
  <div className='plate-home'><Dish name={p1} title='Exquisite Cuisine'/>
  <Dish name={p2} title='Delicious Delights'/>
  <Dish name={p3} title='Satisfying'/></div>
</div>

    </>
  )
}

export default HomePage