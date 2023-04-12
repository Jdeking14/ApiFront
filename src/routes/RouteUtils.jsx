import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const HomeRedirect = () => <Redirect to='/app' />

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => (
    <Switch {...switchProps}>
        {routes && routes.map((route, i) => (
            <Route
                key={route.key || i}
                {...route}
                render={props => route.render
                    ? route.render({ ...props, extraProps, route: route })
                    : <route.component {...props} {...extraProps} route={route} />}
            />
        ))}
    </Switch>
);
