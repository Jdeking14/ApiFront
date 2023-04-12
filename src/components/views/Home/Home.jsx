import React from 'react'
import Layout from '../../Layout'
import { renderRoutes } from '../../../routes/RouteUtils'

const Home = ({ route }) => {
    return (
        <Layout>
            {renderRoutes(route.routes)}
        </Layout>
    )
}

export default Home
