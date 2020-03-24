import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {Home} from './Containers/Home';
import {About} from './Containers/About';
import {Gallery} from './Containers/Gallery';
import {NotFound} from './Containers/NotFound';

export const  Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/gallery" exact component={Gallery} />
            <Route component={NotFound} />
        </Switch>
        )
}