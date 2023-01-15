import React from 'react';
import Cat from "../assets/images/cat3.jpg"

export function Extra() {

    return <>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt='Nature' />
        <img src={Cat} alt="Cat" />
    </>
}