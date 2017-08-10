import React from 'react'
import {Switch, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Options from './components/Options/Options'
import Pokedex from './components/Pokedex/Pokedex'


export default (
    <Switch>
        <Route component={LandingPage} path='/' exact/>
        <Route component={Options} path='/options'/>
        <Route component={Pokedex} path='/pokedex'/>

    </Switch>

)