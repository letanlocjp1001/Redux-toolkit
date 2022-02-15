import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
                  <Route path='/' element={<Home />} />
                  <Route path='/exchanges' element={<Exchanges />} />
                  <Route
                    path='/cryptocurrencies'
                    element={<Cryptocurrencies />}
                  />
                  <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                  <Route path='/news' element={<News />} />
                </Routes>
              </div>
            </Layout>
            <div className='footer'>
              <Typography.Title
                level={5}
                style={{ color: 'white', textAlign: 'center' }}
              >
                Cryptoverse <br />
                All rights reserverd
              </Typography.Title>
              <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
              </Space>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
