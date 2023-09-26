import React, { Component } from "react";
import Slider from "react-slick";
import Card1 from '../components/card'
import f1 from '../img/f1.jpg'
import f2 from '../img/f2.jpg'
import f3 from '../img/f3.jpg'
import f4 from '../img/f4.jpg'
import f5 from '../img/f5.jpg'
import f6 from '../img/f6.jpg'

export default class AutoPlay extends Component {
  render(props) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div >
        <h2>{this.props.title}</h2>
        <Slider {...settings} className='slider-autoslider'>
          <div>
            <Card1 title='Delicious Biryani' src={f1}/>
          </div>
          <div>
            <Card1 title='Dal Makhani'  src={f2}/>
          </div>
          <div>
          <Card1 title='Paneer tikka Masala'  src={f3}/>
          </div>
          <div>
          <Card1 title='Special Dosa'  src={f4}/>
          </div>
          <div>
          <Card1 title='Idli' src={f5}/>
          </div>
          <div>
          <Card1 title='Palak Paneer'  src={f6}/>
          </div>
        </Slider>
      </div>
    );
  }
}