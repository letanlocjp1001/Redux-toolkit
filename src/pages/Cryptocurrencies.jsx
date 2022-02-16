import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { Spinner } from '../components'

import { useGetCryptosQuery } from '../features/services/cryptoAPI'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setCryptos(filteredData)
  }, [searchTerm, cryptosList])

  if (isFetching) {
    return <Spinner />
  }

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search Cryptocurrency'
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
        </div>
      )}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((crypto, index) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                hoverable
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className='crypto-image' src={crypto.iconUrl} />}
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
