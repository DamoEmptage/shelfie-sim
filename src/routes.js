import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dasboard/Dasboard';
import Form from './component/Form/Form';

export default () => (
    <Switch>
        <Route exact path='/' compenent={Dashboard} />
        <Route path='/add' compenent={Form} />
        <Route path='/edit/:id' compenent={Form} />



    </Switch>
);