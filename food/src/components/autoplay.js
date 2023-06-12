import React, { Component } from "react";
import Slider from "react-slick";
import Card1 from '../components/card'

export default class AutoPlay extends Component {
  render(props) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Slider {...settings}>
          <div>
            {/* <h3>1</h3> */}
            <Card1/>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <Card1/>
          </div>
          <div>
          <Card1/>
          </div>
          <div>
          <Card1/>
          </div>
          <div>
          <Card1/>
          </div>
          <div>
          <Card1/>
          </div>
        </Slider>
      </div>
    );
  }
}