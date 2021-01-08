import React, { Component } from 'react'
import '../../../assets/stylesheets/App.css'
import Row from './Row'

class App extends React.Component {
      render() {
        return (
          <div className='App'> 
          <h1>Hello adif</h1>
          <Row title='NETFLIX ORIGINAL'/>
          <Row title='Trending Now '/>
          </div>
        )
      }
    }
export default App
