import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Lists from './Lists/Lists';
import ListDisplay from './ListDisplay/ListDisplay';

export default class List extends Component {
    render(){
        return (
            <div id='Lists'>
                <h1>Lists</h1>
                <BrowserRouter>
                    <Switch>
                        <Route component={ListDisplay} path='/lists/:id' />
                        <Route component={Lists} path='/' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}