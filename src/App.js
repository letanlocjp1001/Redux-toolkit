import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'
import { Home, News, Exchanges, Cryptocurrencies, CryptoDetails } from './pages'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route path='/' element='<Homepage/>' />
                  <Route path='/exchanges' element='<Exchanges/>' />
                  <Route
                    path='/cryptocurrencies'
                    element='<Cryptocurrencies/>'
                  />
                  <Route path='/crypto/:coinId' element='<CryptoDetails/>' />
                  <Route path='/news' element='<News/>' />
                </Routes>
              </div>
            </Layout>
          </div>
          <div className='footer'></div>
        </div>
      </Router>
    </>
  )
}

export default App
