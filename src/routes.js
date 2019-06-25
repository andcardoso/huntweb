import  React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={main}/>
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
)
 export default Routes;
