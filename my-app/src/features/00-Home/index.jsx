import React from 'react'
import PropTypes from 'prop-types'
import HomePage from './pages'
import { Route, Routes } from 'react-router-dom'

function Home(props) {
    return (
        <Routes>
            <Route path="" element={<HomePage />}>
                <Route path=":projectId" element={<HomePage />}></Route>
            </Route>
        </Routes>
    )
}

Home.propTypes = {

}

export default Home

