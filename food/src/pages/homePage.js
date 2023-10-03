import React from 'react'
import '../style/home.css'
import Button from 'react-bootstrap/Button';
import { MDBIcon} from 'mdb-react-ui-kit';
import logo from '../img/logo5.png';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import Dish from '../components/dish';
import AutoPlay from '../components/autoplay';
import NumberAnimation from '../components/numberAnimation';
import r1 from '../img/r1.jpg';
import r2 from '../img/r2.png';
import r3 from '../img/r3.jpg';
import r4 from '../img/r4.jpg';
import menu from '../img/logo6.png';
import Testimonials from '../components/test';
import Place from '../components/place';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/contactForm';
import { db } from '../index';

AOS.init({
  debug: true,
});

const HomePage = () => {
  return (
   <div>

    <div className='home1'>

<div className='home12'>
  <img src={logo} className='logo-home ' data-aos="zoom-in-up" data-aos-duration="3000"/>
  <div className='home-title'>
    <h1 className='fs75 wrapper'>
  <div className='bg' >Nawabi Bites</div>
  <div className='fg' >Nawabi Bites</div>
</h1>
  </div>
  <div className='home-title1'>
    Since 1975
  </div>
  
  
  <Button className='but' variant="dark">Order Now!!</Button>
 
  <AutoPlay className='slider-home' />
</div>
</div>




<div className='About-home' id='about'>
 <div className='About-title'>  About Us....</div>
 <NumberAnimation/>
 <div className='About-content ' ><div  className='About-text' >"At Nawabi Bites, we invite you to savor the rich flavors of Nawabi cuisine. Our restaurant is a celebration of traditional recipes and culinary artistry. Our skilled chefs craft each dish with precision, offering a delectable journey into the heart of Indian flavors. Whether you're a spice enthusiast or seeking a taste of something new, Nawabi Bites promises an unforgettable dining experience. Join us and explore the royal taste of Nawabi cuisine."</div></div>
</div>



<div className='plates' id='plates' >
  <div >Chef's specialty <MDBIcon fas icon="award" /></div>

  <div className='plate-home'><Dish name={p1} title='Exquisite Cuisine'/>
 
<img src={menu} alt='menu'    className='logo-special' style={{ height: '65vh' }}/>
  <Dish name={p3} title='Satisfying'/>

  </div>
</div>


<Place/>

<Testimonials/>


<ContactForm db={db}/>

   </div>
  )
}

export default HomePage