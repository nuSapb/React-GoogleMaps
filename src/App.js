import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { keyConfig } from './config.js'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const style = {
  width: '100%',
  height: '100%'
}


class App extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Map with React</h1>
        </header>

        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{ lat: 13.7515019, lng: 100.4904799 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'วัดพระแก้ว'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>}
  
  
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (keyConfig.googleApiKey)
})(App)
