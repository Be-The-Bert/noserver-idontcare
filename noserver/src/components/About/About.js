import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class About extends Component {
    render(){
        return (
            <div id='About'>
                <div className='contentContainer'>
                    <h1>About</h1>
                    <div className='pContainer'>
                        <p>How often have you said those very words 
to your significant other while deciding 
which restaurant to go to? The fateful 
'I don't care'. It usually heralds half
an hour of tossing out suggestions with
no decision in sight. 
But no more! Simply add the restaurants
you have in mind to your list, click the 
button, and we choose one for you. No muss, 
no fuss, and no more pointless debates.</p>
                    </div>
                </div>
                <div className='arrowContainer'>
                    <HashLink to='/#MakeAList' >
                        <svg className='downArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.414 59.414" aria-labelledby="title">
                        <title id="title">Down Arrow</title>
                        <polygon points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561" />
                        </svg>
                    </HashLink>
                </div>
            </div>
        )
    }
}