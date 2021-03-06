import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Lists from './Lists/Lists';
import ListDisplay from './ListDisplay/ListDisplay';

export default class List extends Component {
    render(){
        return (
            <div id='Lists'>
                <div className='titleContainer'><h1>Lists</h1></div>
                <BrowserRouter>
                    <div>
                        <Route component={ListDisplay} path='/lists/:id' />
                        <Route component={Lists} path='/' />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}