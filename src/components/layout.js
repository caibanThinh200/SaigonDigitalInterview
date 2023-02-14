import React from 'react'
import 'antd/dist/reset.css';
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import ContextProvider from '../lib/context';
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ContextProvider>
        <div className='relative bg-gray'>
          <Seo />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </ContextProvider>
    )
  }
}

export default Template
