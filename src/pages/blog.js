import React, { useCallback, useContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import { AppContext } from '../lib/context';

const Blog = props => {
  const [cats, setCats] = useState([]);

  const getCatApi = useCallback(() => {
      axios.get('https://api.thecatapi.com/v1/images/search?size=full', {
          headers: {
              'x-api-key': 'live_TeURpx3DOOZfLREw1OQkZsWDyuhZf4071GC028woZX3TqF1Yu5FhGZlldB7MaNPP'
          }
      }).then(res => setCats(res.data))
  }, [cats]);

  useEffect(() => {
    getCatApi()
  }, [])

  return <Layout>
    {cats.map(item =>
      <img src={item.url} />)}
  </Layout>
}

export default Blog

