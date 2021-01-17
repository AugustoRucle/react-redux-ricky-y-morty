import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './../containers/Login'
import Home from './../containers/Home'
import Register from './../containers/Register'
import NotFound from './../containers/NotFound'
import Player from './../containers/Player'
import Layout from './../components/Layout'

/**
 * Descripción de atributos para el Componente Route
 * 
 * path: La ruta en la que se renderizara el componente
 * exact: Bandera que indica si queremos que la ruta sea exacta para poder renderizar el componente
 * strict: Bandera que nos indica si queremos que el último slash sea tomado en cuenta para renderizar un component
 * sensitive: Bandera que indica si queremos distinguir entre minúsculas y mayúsculas para poder renderizar un component
 * component: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
*/

/**
 * SWITCH
 * La diferencia entre poner el switch y no ponerlo es que cuando tienes el mismo path para todos 
 * con switch solamente toma el primero y lo renderiza.
 * 
 * BrowserRouter contiene un conjunto de propiedades que pasa a sus hijos
 * por ejemplo "history"
*/

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <NotFound component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App

