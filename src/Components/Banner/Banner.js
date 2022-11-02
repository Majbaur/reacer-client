import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../images/b1.jpg';
import banner2 from '../../images/b2.jpg';
import banner3 from '../../images/b3.jpg';



const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100  "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>“Crashing is part of cycling as crying is part of love.” — ...</h3>
                    <p>If you crash, it is imperative that you assess injury and damage to both yourself and your bike prior to continuing your ride. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>PLAY AND BE FIT.</h3>
                    <p>The health benefits of regular cycling include: increased cardiovascular fitness.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h3>CYCLING IS mainly AN AEROBIC ACTIVITY.</h3>
                    <p>You will breathe deeper, perspire and experience increased body temperature, which will improve your overall fitness level.</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
};

export default Banner;