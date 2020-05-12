import React from 'react'
import {Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './assets/screens_minhas_receitas/Home'
import Saltys from './assets/screens_minhas_receitas/Saltys'
import Sweets from './assets/screens_minhas_receitas/Sweets'
import KitchenPie from './assets/screens_minhas_receitas/KitchenPie'
import Cake from './assets/screens_minhas_receitas/Cake'



export default function Routes () {

<BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/saltys' component={Saltys}/>
        <Route path='/sweets' component={Sweets}/>
        <Route path='/kitchenpie' component={KitchenPie}/>
        <Route path='/cake' component={Cake}/>
    </Switch>
</BrowserRouter>
}