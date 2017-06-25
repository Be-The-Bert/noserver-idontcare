import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Nav extends Component {
    render(){
        return (
            <div id='Nav'>
                <HashLink to='/#About' className='Nav-links'>About</HashLink>
                <HashLink to='/#MakeAList' className='Nav-links'>Make A List</HashLink>
                <HashLink to='/#Lists' className='Nav-links'>My Lists</HashLink>
            </div>
        )
    }
}