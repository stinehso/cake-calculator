import React, { Component, Fragment } from 'react'
import Navbar from './components/Navbar'
import Formvalg from './components/Formvalg'
import SizePicker from './components/SizePicker'
import ShowResult from './components/ShowResult'
import BackButton from './components/BackButton'
import VolumeTable from './components/VolumeTable'
import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'home', // home/ secondShape/ secondNumber/ setSize/ result/ volumeTable
      shapes: 'all',  // all/ circleSquare/ heap
      orig: '',   // possible: circle/ square/ number
      new: '',
      sizes: {
        firstArea: 0,
        secondArea: 0
      }
    }
  }

  onRouteChange = (route) => {
    let newRoute
    route === 'showResult' ? newRoute = 'setSize' : newRoute = 'home'
    this.setState({
      route: newRoute,
      shapes: 'all'})
  }

  setInitialState = (event) => {
    this.setState({
      route: 'home',
      shapes: 'all',
    })
  }

  toVolumeTable = (event) => {
    this.setState({
      route: 'volumeTable',
    })
  }

  onShapeClick = (newChoice) => {
    this.setState(newChoice)

    if (this.state.shapes === 'all') {
      this.setState({route: 'secondShape'})
      if (newChoice.orig === 'circle' || newChoice.orig === 'square') {
        this.setState({shapes: 'circleSquare'})
      } else {
        this.setState({shapes: 'heap'})
        this.setState({new: 'number'})
        setTimeout(() => this.setState({ route: 'setSize'}), 3000)
      }
    } else if (this.state.route.includes('second')){
        this.setState({ route: 'setSize'})
    }
  }

  setArea = (which, area) => {
    which === 'firstArea' ?
      this.setState(prevState => ({
        sizes: {
          ...prevState.sizes,  
          firstArea: area  
        }
      }))
    : this.setState(prevState => ({
      sizes: {
        ...prevState.sizes,  
        secondArea: area  
      }
    }))
  }

  onSubmitSize = (newSizes) => {
    if (this.state.sizes.firstArea > 0 && this.state.sizes.secondArea > 0) {
      this.setState({ route: 'result'})
    } else {
      console.log('firstA: ', this.state.sizes.firstArea);
      console.log('secondA: ', this.state.sizes.secondArea);
      console.log('Sizes cannot be zero');
    }
  }

  render() {
    const route = this.state.route 
    const first = this.state.sizes.firstArea
    const second = this.state.sizes.secondArea

    return (
      <div className="App">
        <Navbar home={event => this.setInitialState()}
          volumes={event => {this.toVolumeTable()}} />
        <div className='mainArea'>
          {route === 'home' || route === 'secondShape'
          ? <Fragment>
            <Formvalg 
              which={this.state.shapes}
              onChoiceMade={this.onShapeClick}
          />
            </Fragment>
          : route === 'setSize'
            ? <Fragment>
              <h2>Set the size of your baking trays</h2>
              <SizePicker shape={this.state.orig} 
                  setArea={(area) => this.setArea('firstArea', area)} 
                  num={1}
              />
              <SizePicker shape={this.state.new} 
                  setArea={(area) => this.setArea('secondArea', area)} 
                  num={2}
              />
              <button type='submit' 
                  onClick={this.onSubmitSize}
              >
                Beregn
              </button>
            </Fragment>
          : route === 'result'
            ? <ShowResult 
                multiplicator={second/first}
              />
          : // route === 'volumeTable'
            <VolumeTable />
          }
          <BackButton route={route} back={this.onRouteChange} />
        </div>
      </div>
    )
  }
}
