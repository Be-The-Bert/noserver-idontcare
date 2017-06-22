import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Nav extends Component {
    render(){
        return (
            <div>
                <h1>Nav</h1>
                <HashLink to='/#About'>About</HashLink>
                <HashLink to='/#MakeAList'>Make A List</HashLink>
                <HashLink to='/#Lists'>My Lists</HashLink>
            </div>
        )
    }
}