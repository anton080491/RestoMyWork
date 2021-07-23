import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom'; 
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' component={MainPage} exact/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/:id' component={ItemPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);