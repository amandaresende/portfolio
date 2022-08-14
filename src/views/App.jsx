import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom';

import Menu from '../components/Menu/Menu'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'    


const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
            <Footer/>
        </BrowserRouter>
    </div>
)

export default App