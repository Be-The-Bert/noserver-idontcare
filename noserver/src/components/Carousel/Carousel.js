import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Carousel extends Component {
    render(){
        return (
            <div id='Carousel'>
                <h1>I Don't Care</h1>
                <HashLink to='/#About' >
                <svg className='downArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.414 59.414" aria-labelledby="title">
	                <title id="title">Down Arrow</title>
                    <polygon points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561" />
                </svg>
                </HashLink>
            </div>
        )
    }
}