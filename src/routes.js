import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/home/Home';

// import TodoList from './components/list_/TodoList';

export default (
    <div>
       <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
        </Switch>
    </div>
);