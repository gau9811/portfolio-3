import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Contact from "./Contact"

const Routes = () => {
    return (
       <Switch>
           <Route path="/contact" component={Contact}/>
       </Switch>
    )
}

export default Routes
