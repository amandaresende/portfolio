import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom';

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Footer from '../components/Footer/Footer'    


const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
            <Footer/>
        </BrowserRouter>
    </div>
)

export default App