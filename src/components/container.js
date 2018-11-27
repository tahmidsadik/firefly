import React, { Component } from 'react'

export default class Container extends Component {
  render () {
    return (
      <div className='container mx-auto mt-8 pr-16 text-white'>
        <p className='text-xl mx-auto text-center font-sans pl-8 mb-2'>
          A thing of beauty is a{' '}
          <span className='text-green-dark font-medium'>joy</span> for ever
        </p>
      </div>
    )
  }
}
