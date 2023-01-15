import React from 'react';
import './middle.css';

// const ImageWithText = (props) => {
//     return (
//         <div className='iconText'>
//             <img className='image' src={props.src} alt={props.text} />
//             <div className='text'>
//                 {props.text}
//             </div>
//         </div>
//     );
// }
const ImageWithText = ({ src, text }) => {
    return (
        <div className='iconText'>
            <img className='image' src={src} alt={text} />
            <div className='text'>
                {text}
            </div>
        </div>
    );
}

export function Middle() {
    return <div className='middlePart'>
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" text="Grocery" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" text="Mobiles" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" text="Fashion" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" text="Electronics" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" text="Home" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" text="Appliances" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" text="Travel" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" text="Top Offers" />
        <ImageWithText src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" text="Beauty, Toys & More"></ImageWithText>
        <ImageWithText src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" text="Two Wheelers" />
    </div>
}
