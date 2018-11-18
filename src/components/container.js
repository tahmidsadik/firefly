import React, { Component } from 'react'

export default class Container extends Component {
  render () {
    return (
      <div className='container mx-auto mt-8 pr-16 bg-black text-white'>
        <p className='text-xl font-sans pl-8 mb-2'>
          A thing of beauty is a{' '}
          <span className='text-yellow-dark font-medium'>joy</span> for ever
        </p>
        <p className='pl-8'>
          Hello Thank you for passing by my website. You can learn more about me
          here.
        </p>
      </div>
    )
  }
}
