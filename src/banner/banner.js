import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './banner.css';

const proprietes = {
    duration: 4000,
    transitionDuration: 200,
    infinite: true,
    indicators: true,
    arrows: true,


}

export function Banner() {
    const images = [
        "https://rukminim1.flixcart.com/fk-p-flap/4340/720/image/fb2ad66e7e554078.jpg?q=50",
        'https://rukminim1.flixcart.com/fk-p-flap/4340/720/image/fe67d3442862b765.jpg?q=50',
        'https://rukminim1.flixcart.com/fk-p-flap/4340/720/image/585719778babfe90.jpeg?q=50',
        'https://rukminim1.flixcart.com/fk-p-flap/4340/720/image/bd588e9f85cccb35.jpeg?q=50'
    ];

    return (
        <div className="bannerContainer">
            <Slide {...proprietes}>
                <img className='bannerImg' src={images[0]} alt="banner1" />
                <img className='bannerImg' src={images[1]} alt="banner2" />
                <img className='bannerImg' src={images[2]} alt="banner3" />
                <img className='bannerImg' src={images[3]} alt="banner4" />
            </Slide>
        </div>
    );
};
